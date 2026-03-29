// Glossary terms data + tooltip logic for course pages
const GLOSSARY_TERMS = [
  {t:"Branch",d:"A parallel line of development in Git. Branches let you work on features or fixes without affecting the main codebase.",tags:["Git"]},
  {t:"Cherry-pick",d:"Apply a specific Commit from one Branch onto another without performing a full Merge.",tags:["Git"]},
  {t:"Clone",d:"Create a local copy of a Remote Git repository, including all history and branches.",tags:["Git"]},
  {t:"Commit",d:"A snapshot of changes saved to the Git history with a message describing what changed.",tags:["Git"]},
  {t:"Fast-forward",d:"A Merge strategy where the Branch pointer moves forward linearly because no divergent Commit history exists.",tags:["Git"]},
  {t:"Fork",d:"A personal copy of someone else's repository on GitHub, used for contributing via Pull Request (PR).",tags:["Git","GitHub"]},
  {t:"HEAD",d:"A pointer to the current Commit or Branch you're working on in Git.",tags:["Git"]},
  {t:"Merge",d:"Combine changes from one Branch into another, creating a merge Commit if histories diverged.",tags:["Git"]},
  {t:"Pull Request (PR)",d:"A request to Merge changes from one Branch into another, enabling code review and CI/CD checks before merging.",tags:["Git","GitHub"]},
  {t:"Rebase",d:"Re-apply commits on top of another base Commit, creating a linear history. Avoid rebasing shared branches.",tags:["Git"]},
  {t:"Reflog",d:"Git's safety net — a log of all HEAD movements that lets you recover lost commits.",tags:["Git"]},
  {t:"Remote",d:"A reference to a repository hosted on a server (e.g., origin on GitHub). Managed with <code>git remote</code>.",tags:["Git"]},
  {t:"Stash",d:"Temporarily save uncommitted changes so you can switch branches, then re-apply them later with <code>git stash pop</code>.",tags:["Git"]},
  {t:"Tag",d:"A named reference to a specific Commit, typically used to mark release versions (e.g., <code>v1.0.0</code>).",tags:["Git"]},
  {t:"GitHub Actions",d:"GitHub's built-in CI/CD platform. Define workflows in YAML triggered by events like push, Pull Request (PR), or schedule.",tags:["GitHub","CI/CD"]},
  {t:"CODEOWNERS",d:"A GitHub file that defines which teams are automatically requested for review when specific files are changed in a Pull Request (PR).",tags:["GitHub"]},
  {t:"Dependabot",d:"GitHub tool that automatically creates Pull Request (PR)s to update vulnerable or outdated dependencies. Part of GitHub's Security features.",tags:["GitHub","Security"]},
  {t:"GitHub Pages",d:"Free static site hosting directly from a GitHub repository, with custom domain and HTTPS support via TLS.",tags:["GitHub"]},
  {t:"Secret Scanning",d:"GitHub feature that detects accidentally committed API keys, tokens, and credentials in your code.",tags:["GitHub","Security"]},
  {t:"CodeQL",d:"GitHub's semantic code analysis engine that finds Security vulnerabilities by querying code as data.",tags:["GitHub","Security"]},
  {t:"chmod",d:"Change file permissions in Linux. Uses numeric (755) or symbolic (u+x) notation to control read, write, and execute access.",tags:["Linux"]},
  {t:"chown",d:"Change file or directory ownership (user and group) in Linux.",tags:["Linux"]},
  {t:"Cron",d:"A time-based job scheduler in Linux. Define recurring tasks in crontab with minute/hour/day/month/weekday format.",tags:["Linux"]},
  {t:"Daemon",d:"A background process in Linux that runs continuously, typically managed by systemd (e.g., sshd, nginx).",tags:["Linux"]},
  {t:"File Descriptor",d:"An integer handle for I/O resources in Linux. 0=stdin, 1=stdout, 2=stderr. Used with Pipe and redirection.",tags:["Linux"]},
  {t:"inode",d:"A data structure in Linux filesystems that stores metadata about a file (permissions, owner, timestamps, block locations).",tags:["Linux"]},
  {t:"Kernel",d:"The core of the operating system that manages hardware, memory, processes, and system calls. Linux is a Kernel.",tags:["Linux"]},
  {t:"Pipe",d:"Connect the stdout of one command to the stdin of another using <code>|</code>. Fundamental to Unix philosophy.",tags:["Linux"]},
  {t:"SSH",d:"Secure Shell — encrypted protocol for remote login and command execution. Supports key-based auth and MFA.",tags:["Linux","Security"]},
  {t:"systemd",d:"The init system and service manager for most modern Linux distributions. Manages Daemon processes, logging, and boot.",tags:["Linux"]},
  {t:"SELinux",d:"Security-Enhanced Linux — a Kernel module providing mandatory access control (MAC) policies beyond standard chmod permissions.",tags:["Linux","Security"]},
  {t:"iptables",d:"Linux Kernel-level packet filtering firewall. Defines rules for network traffic. Replaced by nftables in newer systems.",tags:["Linux","Security"]},
  {t:"Availability Zone (AZ)",d:"An isolated data center within an AWS Region. Deploy across multiple AZs for high availability.",tags:["AWS"]},
  {t:"Auto Scaling Group (ASG)",d:"Automatically adjusts the number of EC2 instances based on CloudWatch metrics or scheduled rules.",tags:["AWS"]},
  {t:"CloudFormation",d:"AWS Infrastructure as Code (IaC) service. Define resources in YAML/JSON templates, similar to Terraform.",tags:["AWS","IaC"]},
  {t:"CloudFront",d:"AWS global CDN with 400+ edge locations. Caches content close to users. Often paired with WAF and ACM.",tags:["AWS"]},
  {t:"CloudTrail",d:"AWS audit service that logs every API call across your account. Essential for Security compliance and forensics.",tags:["AWS","Security"]},
  {t:"CloudWatch",d:"AWS monitoring service for metrics, alarms, logs, and dashboards. Triggers Auto Scaling Group (ASG) and Lambda actions.",tags:["AWS"]},
  {t:"DynamoDB",d:"AWS fully managed NoSQL key-value database with single-digit millisecond latency at any scale.",tags:["AWS"]},
  {t:"EC2",d:"Elastic Compute Cloud — virtual servers in AWS. Choose instance type, AMI, and Auto Scaling Group (ASG) configuration.",tags:["AWS"]},
  {t:"GuardDuty",d:"AWS threat detection service that analyzes CloudTrail, VPC flow logs, and DNS to identify malicious activity.",tags:["AWS","Security"]},
  {t:"IAM",d:"Identity and Access Management — controls who can access AWS resources using policies, roles, and Least Privilege principles.",tags:["AWS","Security"]},
  {t:"KMS",d:"Key Management Service — AWS managed encryption keys for Encryption at Rest. Integrates with S3, RDS, EBS, and Vault.",tags:["AWS","Security"]},
  {t:"Lambda",d:"AWS serverless compute. Run code in response to events without managing servers. Pay per invocation.",tags:["AWS"]},
  {t:"NACL",d:"Network Access Control List — a stateless firewall at the VPC subnet level. Complements Security Group (stateful) rules.",tags:["AWS","Security"]},
  {t:"RDS",d:"Relational Database Service — managed SQL databases (PostgreSQL, MySQL, Aurora) with backups and Multi-AZ.",tags:["AWS"]},
  {t:"S3",d:"Simple Storage Service — object storage with 11 nines durability. Supports lifecycle policies, versioning, and Encryption at Rest via KMS.",tags:["AWS"]},
  {t:"SCP",d:"Service Control Policy — organization-wide IAM guardrails in AWS Organizations that restrict what member accounts can do.",tags:["AWS","Security"]},
  {t:"Security Group",d:"A stateful virtual firewall for EC2 instances controlling inbound/outbound traffic. Works alongside NACL.",tags:["AWS","Security"]},
  {t:"SQS",d:"Simple Queue Service — fully managed message queue for decoupling microservices. Supports standard and FIFO queues.",tags:["AWS"]},
  {t:"SNS",d:"Simple Notification Service — pub/sub messaging that fans out to SQS, Lambda, email, and other subscribers.",tags:["AWS"]},
  {t:"VPC",d:"Virtual Private Cloud — an isolated network in AWS with custom IP ranges, subnets, Security Group, and NACL rules.",tags:["AWS"]},
  {t:"WAF",d:"Web Application Firewall — filters HTTP traffic to protect against XSS, SQL injection, and DDoS. Sits in front of CloudFront or Load Balancer.",tags:["AWS","Security"]},
  {t:"ACM",d:"AWS Certificate Manager — provides free TLS/SSL certificates for Load Balancer and CloudFront. Handles automatic renewal.",tags:["AWS","Security"]},
  {t:"HCL",d:"HashiCorp Configuration Language — the declarative language used to write Terraform configurations. Also used in Vault policies.",tags:["Terraform","IaC","Vault"]},
  {t:"Provider",d:"A Terraform plugin that interfaces with an API (AWS, Azure, GCP, Kubernetes) to manage Resource objects.",tags:["Terraform","IaC"]},
  {t:"State",d:"Terraform's record of real-world resources it manages. Stored in <code>terraform.tfstate</code>. Use remote backends (S3, Consul) for teams.",tags:["Terraform","IaC"]},
  {t:"Plan",d:"<code>terraform plan</code> — preview changes Terraform will make before applying. Shows creates, updates, and destroys.",tags:["Terraform","IaC"]},
  {t:"Module",d:"A reusable, self-contained package of Terraform configuration. Published on the Terraform Registry for sharing.",tags:["Terraform","IaC"]},
  {t:"Resource",d:"A single infrastructure object managed by Terraform (e.g., an EC2 instance, S3 bucket, VPC, or DNS record).",tags:["Terraform","IaC"]},
  {t:"Data Source",d:"A Terraform read-only query to fetch information about existing infrastructure not managed by the current config.",tags:["Terraform","IaC"]},
  {t:"Workspace",d:"Terraform workspaces allow managing multiple State files (e.g., dev, staging, prod) from the same configuration.",tags:["Terraform","IaC"]},
  {t:"Counter",d:"A Prometheus metric type that only goes up (and resets on restart). Use for request counts, errors. Query with <code>rate()</code>.",tags:["Prometheus"]},
  {t:"Gauge",d:"A Prometheus metric type that can go up or down. Use for temperature, memory usage, active connections.",tags:["Prometheus"]},
  {t:"Histogram",d:"A Prometheus metric type that samples observations into configurable buckets. Use for latency percentiles.",tags:["Prometheus"]},
  {t:"Summary",d:"A Prometheus metric type similar to Histogram but calculates quantiles on the client side. Less flexible for aggregation.",tags:["Prometheus"]},
  {t:"PromQL",d:"Prometheus Query Language — select, aggregate, and transform time series data. Supports <code>rate()</code>, <code>sum()</code>, <code>histogram_quantile()</code>.",tags:["Prometheus"]},
  {t:"Scrape",d:"The process of Prometheus pulling metrics from a target endpoint (Exporter) via HTTP at a configured interval.",tags:["Prometheus"]},
  {t:"Alertmanager",d:"Handles alerts from Prometheus — deduplication, grouping, routing, silencing, and notification dispatch to Slack, PagerDuty, etc.",tags:["Prometheus"]},
  {t:"Exporter",d:"A component that exposes metrics from third-party systems (Node Exporter, MySQL Exporter) in Prometheus Scrape format.",tags:["Prometheus"]},
  {t:"Recording Rule",d:"A pre-computed PromQL query saved as a new time series. Reduces dashboard query-time computation.",tags:["Prometheus"]},
  {t:"Thanos",d:"A CNCF project that adds global query view, long-term S3 storage, deduplication, and downsampling to Prometheus.",tags:["Prometheus"]},
  {t:"Grafana",d:"The most popular visualization and dashboard tool for Prometheus. Query with PromQL, build alerts, template variables.",tags:["Prometheus"]},
  {t:"Federation",d:"A pattern where hierarchical Prometheus servers Scrape from each other for scaling across clusters.",tags:["Prometheus"]},
  {t:"Secret Engine",d:"A Vault component that stores, generates, or encrypts data. Types include KV, PKI, Transit Engine, database, and AWS.",tags:["Vault","Security"]},
  {t:"Dynamic Secret",d:"A credential generated on-demand by Vault with a TTL. Automatically revoked after expiry. Eliminates long-lived passwords.",tags:["Vault","Security"]},
  {t:"Auth Method",d:"How a client proves its identity to Vault. Methods include AppRole, Kubernetes, OIDC, AWS IAM, LDAP, and Userpass.",tags:["Vault","Security"]},
  {t:"Policy (Vault)",d:"An HCL rule defining which secret paths a Vault token can access and what capabilities (read, write, list, deny) are allowed.",tags:["Vault","Security"]},
  {t:"Seal/Unseal",d:"Vault starts sealed (encrypted). Unsealing requires Shamir's Secret Sharing threshold key shares or auto-unseal via KMS.",tags:["Vault","Security"]},
  {t:"Transit Engine",d:"Vault's Encryption as a Service. Apps send data to Vault for encryption/decryption without ever seeing the key.",tags:["Vault","Security"]},
  {t:"KV",d:"Key-Value secret engine — Vault's simplest Secret Engine for storing static secrets. v2 adds versioning, soft delete, and metadata.",tags:["Vault"]},
  {t:"PKI",d:"Public Key Infrastructure — a Vault Secret Engine that acts as a Certificate Authority, issuing and managing TLS certificates automatically.",tags:["Vault","Security"]},
  {t:"Barrier",d:"Vault's encryption layer that protects all stored data. Uses AES-256-GCM encryption. Data passes through the Barrier before reaching the storage backend.",tags:["Vault","Security"]},
  {t:"Shamir's Secret Sharing",d:"A cryptographic algorithm that splits Vault's master key into N shares, requiring K threshold shares to reconstruct. Used in Seal/Unseal.",tags:["Vault","Security"]},
  {t:"Raft",d:"A consensus algorithm used by Vault (and Consul) for integrated HA storage. Recommended for production: 3 or 5 node clusters.",tags:["Vault","Temporal"]},
  {t:"AppRole",d:"A Vault Auth Method designed for machine-to-machine authentication. Uses a RoleID + SecretID pair, ideal for CI/CD pipelines.",tags:["Vault","Security"]},
  {t:"Consul",d:"A HashiCorp service mesh and service discovery tool. Can serve as a Vault storage backend and provides health checking.",tags:["Vault","Security"]},
  {t:"Namespace (Vault)",d:"Vault Enterprise feature for multi-tenancy. Each namespace has isolated Secret Engine, Auth Method, and Policy (Vault) configurations.",tags:["Vault"]},
  {t:"Workflow (Temporal)",d:"A durable function orchestrated by Temporal. Survives crashes, restarts, and outages via Event Sourcing.",tags:["Temporal"]},
  {t:"Activity (Temporal)",d:"A single unit of work in Temporal (e.g., API call, DB write). Has retry policies, timeouts, and heartbeats.",tags:["Temporal"]},
  {t:"Worker (Temporal)",d:"A process that polls a Task Queue for Workflow (Temporal) and Activity (Temporal) tasks to execute.",tags:["Temporal"]},
  {t:"Task Queue",d:"A named queue in Temporal that routes workflow and activity tasks to the appropriate Worker (Temporal) processes.",tags:["Temporal"]},
  {t:"Signal",d:"An async message sent to a running Workflow (Temporal) to trigger behavior or pass data without stopping execution.",tags:["Temporal"]},
  {t:"Event Sourcing",d:"A pattern where state changes are stored as a sequence of events rather than current state. Core to how Temporal achieves durability.",tags:["Temporal"]},
  {t:"Retry Policy",d:"Configuration in Temporal (and other systems) that controls how failed Activity (Temporal) executions are automatically retried.",tags:["Temporal"]},
  {t:"Agent (Crew AI)",d:"An autonomous AI unit with a role, goal, and backstory. Agents collaborate within a Crew to complete tasks using LLM providers.",tags:["Crew AI"]},
  {t:"Crew",d:"A team of Agent (Crew AI) instances that work together on tasks using a defined process (sequential, hierarchical, or consensual).",tags:["Crew AI"]},
  {t:"Task (Crew AI)",d:"A specific piece of work assigned to an Agent (Crew AI), with a description, expected output, and optional Tool (Crew AI) access.",tags:["Crew AI"]},
  {t:"Tool (Crew AI)",d:"A capability given to an Agent (Crew AI) — search, web scraping, file I/O, or custom Python functions.",tags:["Crew AI"]},
  {t:"LLM",d:"Large Language Model — the AI backbone (GPT, Claude, Llama) that powers Agent (Crew AI) reasoning and text generation.",tags:["Crew AI"]},
  {t:"Zero Trust",d:"A Security model that assumes no implicit trust. Every request must be authenticated, authorized, and encrypted via MFA and Least Privilege.",tags:["Zero Trust","Security"]},
  {t:"ZTNA",d:"Zero Trust Network Access — identity-based, per-application access that replaces traditional VPNs. Providers: Zscaler, Cloudflare Access, Tailscale.",tags:["Zero Trust","Security"]},
  {t:"Micro-segmentation",d:"Dividing a network into isolated segments so a breach in one workload cannot spread laterally. Enforced by Service Mesh or Security Group rules.",tags:["Zero Trust","Security"]},
  {t:"MFA",d:"Multi-Factor Authentication — requiring two or more verification factors (password + OTP, biometric, FIDO2 key). First step in Zero Trust.",tags:["Security","Zero Trust"]},
  {t:"mTLS",d:"Mutual TLS — both client and server present PKI certificates to authenticate each other. Used in Service Mesh for Zero Trust.",tags:["Security","Zero Trust"]},
  {t:"SPIFFE",d:"Secure Production Identity Framework For Everyone — a CNCF standard for cryptographic workload identity using mTLS.",tags:["Zero Trust","Security"]},
  {t:"SIEM",d:"Security Information and Event Management — aggregates and correlates security logs for threat detection (Splunk, Sentinel, Elastic).",tags:["Security"]},
  {t:"Least Privilege",d:"Granting only the minimum permissions needed. Core principle of Zero Trust, IAM, and Policy (Vault).",tags:["Security","Zero Trust","AWS","Vault"]},
  {t:"Service Mesh",d:"An infrastructure layer (Istio, Linkerd, Consul) providing mTLS, Observability, and traffic control between microservices.",tags:["Zero Trust","Security"]},
  {t:"BeyondCorp",d:"Google's pioneering Zero Trust implementation. Eliminated VPNs; all apps accessed via identity-aware Access Proxy.",tags:["Zero Trust","Security"]},
  {t:"PAM",d:"Privileged Access Management — controls and audits elevated access. Supports JIT (just-in-time) access with tools like CyberArk, Vault, Teleport.",tags:["Security","Zero Trust","Vault"]},
  {t:"EDR",d:"Endpoint Detection and Response — monitors devices for threats in real-time (CrowdStrike, SentinelOne, Defender). Part of device trust in Zero Trust.",tags:["Security","Zero Trust"]},
  {t:"SOAR",d:"Security Orchestration, Automation and Response — automates incident response playbooks triggered by SIEM alerts.",tags:["Security"]},
  {t:"DLP",d:"Data Loss Prevention — tools and policies that detect and block sensitive data exfiltration (credit cards, PII, secrets).",tags:["Security","Zero Trust"]},
  {t:"OIDC",d:"OpenID Connect — an identity layer on top of OAuth 2.0 for authenticating users. Returns ID tokens (JWT). Used by Vault Auth Method, ZTNA, and SSO.",tags:["Security","Vault","Zero Trust"]},
  {t:"LDAP",d:"Lightweight Directory Access Protocol — a protocol for accessing directory services (Active Directory, OpenLDAP). Used as a Vault Auth Method.",tags:["Security","Vault"]},
  {t:"SAML",d:"Security Assertion Markup Language — an XML-based SSO protocol for enterprise identity federation. Older than OIDC, still widely used.",tags:["Security","Zero Trust"]},
  {t:"OAuth 2.0",d:"An authorization framework that lets apps obtain limited access to user accounts. OIDC builds on top of OAuth 2.0 for authentication.",tags:["Security"]},
  {t:"JWT",d:"JSON Web Token — a compact, signed token format for transmitting claims between parties. Used by OIDC, API Gateway, and Auth Method.",tags:["Security"]},
  {t:"SSO",d:"Single Sign-On — authenticate once and access multiple applications. Implemented via OIDC or SAML with providers like Okta, Azure AD.",tags:["Security","Zero Trust"]},
  {t:"FIDO2",d:"A passwordless authentication standard using hardware security keys or biometrics. Strongest form of MFA.",tags:["Security","Zero Trust"]},
  {t:"API Gateway",d:"A reverse proxy that routes, authenticates, rate-limits, and transforms API requests. Examples: AWS API Gateway, Kong, Envoy.",tags:["AWS","Security"]},
  {t:"CI/CD",d:"Continuous Integration / Continuous Deployment — automating build, test, and deployment pipelines via GitHub Actions or similar.",tags:["GitHub","CI/CD"]},
  {t:"Container",d:"A lightweight, isolated runtime for applications. Docker containers package code + dependencies. Run on ECS, EKS, or Fargate.",tags:["Linux","AWS"]},
  {t:"DNS",d:"Domain Name System — translates domain names to IP addresses. AWS Route 53 is a managed DNS service with health checks.",tags:["Linux","AWS"]},
  {t:"Encryption at Rest",d:"Encrypting stored data using KMS so it's unreadable without the decryption key. Standard for S3, RDS, EBS.",tags:["Security","AWS","Vault"]},
  {t:"Encryption in Transit",d:"Encrypting data in motion using TLS. Prevents eavesdropping. mTLS adds mutual authentication.",tags:["Security","AWS","Vault"]},
  {t:"Idempotent",d:"An operation that produces the same result regardless of how many times it's executed. Critical for APIs, Terraform, and Temporal.",tags:["Terraform","Temporal"]},
  {t:"Infrastructure as Code (IaC)",d:"Managing infrastructure through code (Terraform, CloudFormation, Pulumi) instead of manual provisioning. Enables version control and review.",tags:["Terraform","AWS"]},
  {t:"Load Balancer",d:"Distributes incoming traffic across multiple targets. AWS ALB (Layer 7 HTTP) and NLB (Layer 4 TCP). Works with ACM for TLS.",tags:["AWS"]},
  {t:"Observability",d:"Understanding system behavior from metrics (Prometheus), logs (CloudWatch), and traces (X-Ray). Visualized with Grafana.",tags:["Prometheus","AWS"]},
  {t:"RBAC",d:"Role-Based Access Control — assigning permissions to roles rather than individual users. Used in IAM, Kubernetes, and Vault.",tags:["Security","AWS","Vault"]},
  {t:"TLS",d:"Transport Layer Security — cryptographic protocol for Encryption in Transit. Successor to SSL. Certificates issued by ACM or PKI.",tags:["Security"]},
  {t:"TTL",d:"Time To Live — how long data (Dynamic Secret, DNS record, token, cache entry) remains valid before expiring.",tags:["Vault","Prometheus","AWS"]},
  {t:"Kubernetes",d:"An open-source Container orchestration platform. Manages deployment, scaling, and networking. Runs on AWS EKS or self-managed.",tags:["AWS","Linux"]},
  {t:"Docker",d:"A platform for building and running Container images. Packages applications with dependencies into portable, isolated units.",tags:["Linux"]},
  {t:"Terraform Cloud",d:"HashiCorp's managed service for Terraform. Provides remote State storage, team collaboration, Policy as Code, and CI/CD for IaC.",tags:["Terraform","IaC"]},
];

(function() {
  // Build lookup index
  const termIndex = {};
  GLOSSARY_TERMS.forEach(t => { termIndex[t.t.toLowerCase()] = t; });

  // Sort by length desc so longer matches take priority
  const termNames = GLOSSARY_TERMS.map(t => t.t).sort((a, b) => b.length - a.length);

  // Create tooltip element
  const tt = document.createElement('div');
  tt.id = 'glossaryTooltip';
  tt.innerHTML = '<div class="gtt-name"></div><div class="gtt-def"></div><div class="gtt-tags"></div>';
  document.body.appendChild(tt);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .term-link {
      color: var(--accent);
      font-weight: 600;
      text-decoration: none;
      border-bottom: 1px dashed var(--accent);
      cursor: pointer;
    }
    .term-link:hover { border-bottom-style: solid; }
    #glossaryTooltip {
      display: none;
      position: fixed;
      background: var(--card-bg, #fff);
      border: 2px solid var(--accent, #DA7756);
      border-radius: 12px;
      padding: 16px 20px;
      max-width: 360px;
      width: max-content;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      z-index: 1000;
      pointer-events: auto;
    }
    #glossaryTooltip.visible { display: block; }
    .gtt-name { font-weight: 700; font-size: 1.05rem; margin-bottom: 6px; color: var(--accent, #DA7756); }
    .gtt-def { font-size: 0.95rem; color: var(--text, #2D2B28); line-height: 1.5; }
    .gtt-tags { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 4px; }
    .gtt-tag {
      display: inline-block;
      background: var(--accent2, #F0EBE5);
      color: var(--accent, #DA7756);
      font-weight: 600;
      padding: 1px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
    }
  `;
  document.head.appendChild(style);

  // Scan slides for term references and wrap them
  function linkifySlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
      // Process text nodes in p, li, td elements (not code/pre)
      const elements = slide.querySelectorAll('p, li, td, .card h3, .metric-card h3, .bp-item');
      elements.forEach(el => {
        // Skip if inside <pre> or <code>
        if (el.closest('pre') || el.closest('code')) return;
        // Skip elements that are purely structural
        if (el.children.length > 0 && el.textContent.trim().length === 0) return;

        let html = el.innerHTML;
        let changed = false;

        // Protect existing HTML tags
        const prot = [];
        let safe = html.replace(/<[^>]+>/g, m => {
          prot.push(m);
          return '\x00' + (prot.length - 1) + '\x00';
        });

        termNames.forEach(name => {
          const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const re = new RegExp('\\b' + escaped + '\\b', 'g');
          const before = safe;
          safe = safe.replace(re, '<span class="term-link" data-term="' + name + '">' + name + '</span>');
          if (safe !== before) changed = true;
        });

        if (changed) {
          // Restore protected
          safe = safe.replace(/\x00(\d+)\x00/g, (_, i) => prot[parseInt(i)]);
          el.innerHTML = safe;
        }
      });
    });
  }

  // Tooltip logic
  const ttName = tt.querySelector('.gtt-name');
  const ttDef = tt.querySelector('.gtt-def');
  const ttTags = tt.querySelector('.gtt-tags');
  let tooltipTimeout;
  let activeLink = null;

  function showTooltip(link) {
    clearTimeout(tooltipTimeout);
    const name = link.getAttribute('data-term');
    const term = termIndex[name.toLowerCase()];
    if (!term) return;

    activeLink = link;
    ttName.textContent = term.t;
    ttDef.textContent = term.d.replace(/<[^>]+>/g, '');
    ttTags.innerHTML = term.tags.map(tag => '<span class="gtt-tag">' + tag + '</span>').join('');

    const rect = link.getBoundingClientRect();
    let top = rect.bottom + 8;
    let left = rect.left;

    tt.classList.add('visible');
    const tw = tt.offsetWidth;
    const th = tt.offsetHeight;
    if (left + tw > window.innerWidth - 16) left = window.innerWidth - tw - 16;
    if (left < 16) left = 16;
    if (top + th > window.innerHeight - 16) top = rect.top - th - 8;

    tt.style.top = top + 'px';
    tt.style.left = left + 'px';
  }

  function hideTooltip() {
    tt.classList.remove('visible');
    activeLink = null;
  }

  // Desktop hover
  document.addEventListener('mouseover', function(e) {
    const link = e.target.closest('.term-link');
    if (!link) return;
    showTooltip(link);
  });

  document.addEventListener('mouseout', function(e) {
    const link = e.target.closest('.term-link');
    if (!link) return;
    tooltipTimeout = setTimeout(hideTooltip, 300);
  });

  tt.addEventListener('mouseenter', function() { clearTimeout(tooltipTimeout); });
  tt.addEventListener('mouseleave', function() { tooltipTimeout = setTimeout(hideTooltip, 300); });

  // Click: tap to show, tap again to open glossary for that term
  document.addEventListener('click', function(e) {
    const link = e.target.closest('.term-link');
    if (!link) {
      if (activeLink) hideTooltip();
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (activeLink === link && tt.classList.contains('visible')) {
      hideTooltip();
      // Open glossary with search for this term
      const name = link.getAttribute('data-term');
      window.open('glossary.html?search=' + encodeURIComponent(name), '_blank');
      return;
    }
    showTooltip(link);
  });

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', linkifySlides);
  } else {
    linkifySlides();
  }
})();
