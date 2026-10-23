/**
 * Interactive Terminal Module - Sueleido Chaves Portfolio
 * Emulates a real cloud/network operations console
 */

export function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const commandButtons = document.querySelectorAll('[data-term-cmd]');
  
  if (!terminalBody) return;

  const COMMANDS = {
    'status': `[+] TARGET: Sueleido Chaves da Silva Filho
[+] ROLE: Analista de Infraestrutura II & Engenheiro de Redes / Cloud
[+] STATUS: <span class="t-green">ONLINE / ACTIVE</span>
[+] EXP: 7+ anos em infraestrutura crítica, telecom e nuvem
[+] CORE: Alta Disponibilidade, Automação, Resiliência e Segurança`,

    'aws': `[+] CERTIFICATION: <span class="t-green">AWS Certified Solutions Architect – Associate (SAA-C03) [2026]</span>
[+] FOUNDATION: <span class="t-cyan">AWS Certified Cloud Practitioner (CLF-C02)</span>
[+] ARCHITECTURE: VPC Multi-AZ, EC2, ALB, Route53, Auto Scaling, RDS, S3, IAM, CloudWatch
[+] FOCUS: Well-Architected Framework, Resiliência, Otimização de Custos e Segurança`,

    'network': `[+] BACKBONE & ROUTING: TCP/IP, OSPF, MPLS, DWDM, Links Metro
[+] VENDORS & TROUBLESHOOTING: Cisco, Juniper, Huawei, DataCOM, MikroTik, Fortinet
[+] EXPANSÃO 5G: Suporte à engenharia de transmissão e data centers
[+] SECURITY: Fortinet NSE-1 & NSE-2 Network Security Associate`,

    'stack': `[+] INFRASTRUCTURE AS CODE: Terraform, Vagrant, Puppet
[+] CONTAINERS: Docker, Docker Compose, Kubernetes (estudos e labs)
[+] AUTOMATION & SCRIPTING: Bash/Shell Script, Python, Ansible
[+] OPERATING SYSTEMS: Linux (Ubuntu, Debian, Alpine), Windows Server
[+] OBSERVABILITY: Zabbix Server, MySQL, Telemetria de Redes`,

    'contact': `[+] EMAIL: <a href="mailto:sueleidoc@gmail.com" class="t-green">sueleidoc@gmail.com</a>
[+] LINKEDIN: <a href="https://www.linkedin.com/in/sueleidochaves" target="_blank" class="t-cyan">linkedin.com/in/sueleidochaves</a>
[+] GITHUB: <a href="https://github.com/sueleido" target="_blank" class="t-green">github.com/sueleido</a>
[+] LOCATION: São Miguel, Rio Grande do Norte — Brasil`
  };

  function runCommand(cmd) {
    cmd = cmd.trim().toLowerCase();

    // Remove active class from buttons
    commandButtons.forEach(btn => {
      if (btn.getAttribute('data-term-cmd') === cmd) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';

    if (cmd === 'clear') {
      terminalBody.innerHTML = `
        <div class="terminal-prompt-line">
          <span class="terminal-prompt-user">sueleido@infra-core</span>:<span class="terminal-prompt-host">~</span>$ <span class="current-cmd"></span><span class="terminal-cursor"></span>
        </div>
      `;
      return;
    }

    const commandText = COMMANDS[cmd] || `bash: comando não encontrado: ${cmd}. Tente: status, aws, network, stack, contact, clear.`;

    outputDiv.innerHTML = `
      <div class="terminal-prompt-line">
        <span class="terminal-prompt-user">sueleido@infra-core</span>:<span class="terminal-prompt-host">~</span>$ ${cmd}
      </div>
      <div>${commandText}</div>
    `;

    // Append before the active prompt
    const activePrompt = terminalBody.querySelector('.terminal-prompt-line:last-child');
    if (activePrompt) {
      terminalBody.insertBefore(outputDiv, activePrompt);
    } else {
      terminalBody.appendChild(outputDiv);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Bind command buttons
  commandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-term-cmd');
      if (cmd) runCommand(cmd);
    });
  });

  // Expose to window for potential input use
  window.runTermCommand = runCommand;
}
