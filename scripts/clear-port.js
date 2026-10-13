import { execSync } from 'node:child_process';

const port = Number(process.argv[2] || '5173');

function run(command) {
  try {
    return execSync(command, { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
  } catch (error) {
    const text = (error.stdout || '') + (error.stderr || '');
    if (text) {
      return text;
    }
    return '';
  }
}

function getWindowsPidsForPort(targetPort) {
  const command = [
    '$ports = @(Get-NetTCPConnection -LocalPort ' + targetPort + ' -ErrorAction SilentlyContinue);',
    'if ($ports.Count -gt 0) {',
    '$ports | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ -gt 0 } | ForEach-Object { $_ }',
    '}',
  ].join(' ');

  const output = run(`powershell.exe -NoProfile -Command "${command}"`);
  const values = output
    .split(/\r?\n/)
    .map((line) => Number(String(line).trim()))
    .filter((value) => Number.isFinite(value) && value > 0);

  return [...new Set(values)];
}

function killProcesses(pids) {
  if (!pids.length) {
    return;
  }

  const command = pids
    .map((pid) => `Stop-Process -Id ${pid} -Force -ErrorAction SilentlyContinue`)
    .join('; ');

  run(`powershell.exe -NoProfile -Command "${command}"`);
}

const pids = getWindowsPidsForPort(port);
if (pids.length) {
  console.log(`Port ${port} was occupied. Stopping processes: ${pids.join(', ')}.`);
  killProcesses(pids);
} else {
  console.log(`Port ${port} is free.`);
}
