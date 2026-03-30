const GLOSSARY_TERMS = [
  {t:"Branch", d:"A parallel line of development in Git. Branches let you work on features or fixes without affecting the main codebase.", tags:["Git"]},
  {t:"Cherry-pick", d:"Apply a specific Commit from one Branch onto another without performing a full Merge.", tags:["Git"]},
  {t:"Clone", d:"Create a local copy of a Remote Git repository, including all history and branches.", tags:["Git"]},
  {t:"Commit", d:"A snapshot of changes saved to the Git history with a message describing what changed.", tags:["Git"]},
  {t:"Fast-forward", d:"A Merge strategy where the Branch pointer moves forward linearly because no divergent Commit history exists.", tags:["Git"]},
  {t:"Fork", d:"A personal copy of someone else's repository on GitHub, used for contributing via Pull Request (PR).", tags:["Git","GitHub"]},
  {t:"HEAD", d:"A pointer to the current Commit or Branch you're working on in Git.", tags:["Git"]},
  {t:"Merge", d:"Combine changes from one Branch into another, creating a merge Commit if histories diverged.", tags:["Git"]},
  {t:"Pull Request (PR)", d:"A request to Merge changes from one Branch into another, enabling code review and CI/CD checks before merging.", tags:["Git","GitHub"]},
  {t:"Rebase", d:"Re-apply commits on top of another base Commit, creating a linear history. Avoid rebasing shared branches.", tags:["Git"]},
  {t:"Squash", d:"Combine multiple Git commits into a single commit. Used during interactive Rebase or Pull Request (PR) merge to keep history clean and readable.", tags:["Git"]},
  {t:"Reflog", d:"Git's safety net — a log of all HEAD movements that lets you recover lost commits.", tags:["Git"]},
  {t:"Remote", d:"A reference to a repository hosted on a server (e.g., origin on GitHub). Managed with <code>git remote</code>.", tags:["Git"]},
  {t:"Stash", d:"Temporarily save uncommitted changes so you can switch branches, then re-apply them later with <code>git stash pop</code>.", tags:["Git"]},
  {t:"Tag", d:"A named reference to a specific Commit, typically used to mark release versions (e.g., <code>v1.0.0</code>).", tags:["Git"]},
  {t:"GitHub Actions", d:"GitHub's built-in CI/CD platform. Define workflows in YAML triggered by events like push, Pull Request (PR), or schedule.", tags:["GitHub","CI/CD"]},
  {t:"CODEOWNERS", d:"A GitHub file that defines which teams are automatically requested for review when specific files are changed in a Pull Request (PR).", tags:["GitHub"]},
  {t:"Dependabot", d:"GitHub tool that automatically creates Pull Request (PR)s to update vulnerable or outdated dependencies. Part of GitHub's Security features.", tags:["GitHub","Security"]},
  {t:"GitHub Pages", d:"Free static site hosting directly from a GitHub repository, with custom domain and HTTPS support via TLS.", tags:["GitHub"]},
  {t:"Secret Scanning", d:"GitHub feature that detects accidentally committed API keys, tokens, and credentials in your code.", tags:["GitHub","Security"]},
  {t:"CodeQL", d:"GitHub's semantic code analysis engine that finds Security vulnerabilities by querying code as data.", tags:["GitHub","Security"]},
  {t:"chmod", d:"Change file permissions in Linux. Uses numeric (755) or symbolic (u+x) notation to control read, write, and execute access.", tags:["Linux"]},
  {t:"chown", d:"Change file or directory ownership (user and group) in Linux.", tags:["Linux"]},
  {t:"Cron", d:"A time-based job scheduler in Linux. Define recurring tasks in crontab with minute/hour/day/month/weekday format.", tags:["Linux"]},
  {t:"File Descriptor", d:"An integer handle for I/O resources in Linux. 0=stdin, 1=stdout, 2=stderr. Used with Pipe and redirection.", tags:["Linux"]},
  {t:"inode", d:"A data structure in Linux filesystems that stores metadata about a file (permissions, owner, timestamps, block locations).", tags:["Linux"]},
  {t:"Kernel", d:"The core of the operating system that manages hardware, memory, processes, and system calls. Linux is a Kernel.", tags:["Linux"]},
  {t:"Pipe", d:"Connect the stdout of one command to the stdin of another using <code>|</code>. Fundamental to Unix philosophy.", tags:["Linux"]},
  {t:"SSH", d:"Secure Shell — encrypted protocol for remote login and command execution. Supports key-based auth and MFA.", tags:["Linux","Security"]},
  {t:"systemd", d:"The init system and service manager for most modern Linux distributions. Manages Daemon processes, logging, and boot.", tags:["Linux"]},
  {t:"Daemon", d:"A background process that runs continuously without user interaction. Examples: sshd (SSH), dockerd (Docker), cron. Managed by systemd on modern Linux.", tags:["Linux","Docker"]},
  {t:"SELinux", d:"Security-Enhanced Linux — a Kernel module providing mandatory access control (MAC) policies beyond standard chmod permissions.", tags:["Linux","Security"]},
  {t:"iptables", d:"Linux Kernel-level packet filtering firewall. Defines rules for network traffic. Replaced by nftables in newer systems.", tags:["Linux","Security"]},
  {t:"Availability Zone (AZ)", d:"An isolated data center within an AWS Region. Deploy across multiple AZs for high availability.", tags:["AWS"]},
  {t:"Auto Scaling Group (ASG)", d:"Automatically adjusts the number of EC2 instances based on CloudWatch metrics or scheduled rules.", tags:["AWS"]},
  {t:"CloudFormation", d:"AWS Infrastructure as Code (IaC) service. Define resources in YAML/JSON templates, similar to Terraform.", tags:["AWS","IaC"]},
  {t:"CloudFront", d:"AWS global CDN with 400+ edge locations. Caches content close to users. Often paired with WAF and ACM.", tags:["AWS"]},
  {t:"CloudTrail", d:"AWS audit service that logs every API call across your account. Essential for Security compliance and forensics.", tags:["AWS","Security"]},
  {t:"CloudWatch", d:"AWS monitoring service for metrics, alarms, logs, and dashboards. Triggers Auto Scaling Group (ASG) and Lambda actions.", tags:["AWS"]},
  {t:"DynamoDB", d:"AWS fully managed NoSQL key-value database with single-digit millisecond latency at any scale.", tags:["AWS"]},
  {t:"EC2", d:"Elastic Compute Cloud — virtual servers in AWS. Choose instance type, AMI, and Auto Scaling Group (ASG) configuration.", tags:["AWS"]},
  {t:"GuardDuty", d:"AWS threat detection service that analyzes CloudTrail, VPC flow logs, and DNS to identify malicious activity.", tags:["AWS","Security"]},
  {t:"IAM", d:"Identity and Access Management — controls who can access AWS resources using policies, roles, and Least Privilege principles.", tags:["AWS","Security"]},
  {t:"KMS", d:"Key Management Service — AWS managed encryption keys for Encryption at Rest. Integrates with S3, RDS, EBS, and Vault.", tags:["AWS","Security"]},
  {t:"Lambda", d:"AWS serverless compute. Run code in response to events without managing servers. Pay per invocation.", tags:["AWS"]},
  {t:"NACL", d:"Network Access Control List — a stateless firewall at the VPC subnet level. Complements Security Group (stateful) rules.", tags:["AWS","Security"]},
  {t:"RDS", d:"Relational Database Service — managed SQL databases (PostgreSQL, MySQL, Aurora) with backups and Multi-AZ.", tags:["AWS"]},
  {t:"S3", d:"Simple Storage Service — object storage with 11 nines durability. Supports lifecycle policies, versioning, and Encryption at Rest via KMS.", tags:["AWS"]},
  {t:"SCP", d:"Service Control Policy — organization-wide IAM guardrails in AWS Organizations that restrict what member accounts can do.", tags:["AWS","Security"]},
  {t:"Security Group", d:"A stateful virtual firewall for EC2 instances controlling inbound/outbound traffic. Works alongside NACL.", tags:["AWS","Security"]},
  {t:"SQS", d:"Simple Queue Service — fully managed message queue for decoupling microservices. Supports standard and FIFO queues.", tags:["AWS"]},
  {t:"SNS", d:"Simple Notification Service — pub/sub messaging that fans out to SQS, Lambda, email, and other subscribers.", tags:["AWS"]},
  {t:"VPC", d:"Virtual Private Cloud — an isolated network in AWS with custom IP ranges, subnets, Security Group, and NACL rules.", tags:["AWS"]},
  {t:"WAF", d:"Web Application Firewall — filters HTTP traffic to protect against XSS, SQL injection, and DDoS. Sits in front of CloudFront or Load Balancer.", tags:["AWS","Security"]},
  {t:"ACM", d:"AWS Certificate Manager — provides free TLS/SSL certificates for Load Balancer and CloudFront. Handles automatic renewal.", tags:["AWS","Security"]},
  {t:"ALB", d:"Application Load Balancer — AWS Layer 7 load balancer. Routes HTTP/HTTPS traffic by path, host, or headers. Supports WebSocket and gRPC.", tags:["AWS"]},
  {t:"NLB", d:"Network Load Balancer — AWS Layer 4 load balancer. Ultra-low latency for TCP/UDP traffic. Handles millions of requests per second.", tags:["AWS"]},
  {t:"Aurora", d:"Amazon Aurora — a MySQL/PostgreSQL-compatible managed database up to 5x faster than standard MySQL. Supports serverless and global databases.", tags:["AWS"]},
  {t:"EBS", d:"Elastic Block Store — persistent block storage volumes for EC2 instances. Types: gp3 (general), io2 (high IOPS), st1 (throughput). Supports KMS encryption.", tags:["AWS"]},
  {t:"ECS", d:"Elastic Container Service — AWS managed container orchestration. Run Docker containers on EC2 or Fargate. Integrates with ALB and CloudWatch.", tags:["AWS"]},
  {t:"EFS", d:"Elastic File System — fully managed NFS file storage that scales automatically. Shared across multiple EC2 instances and Availability Zone (AZ)s.", tags:["AWS"]},
  {t:"EKS", d:"Elastic Kubernetes Service — managed Kubernetes on AWS. Runs control plane across multiple Availability Zone (AZ)s. Supports Fargate for serverless pods.", tags:["AWS"]},
  {t:"ElastiCache", d:"AWS managed Redis or Memcached for in-memory caching. Reduces database load with sub-millisecond response times.", tags:["AWS"]},
  {t:"EventBridge", d:"AWS serverless event bus for building event-driven architectures. Routes events between AWS services, SaaS apps, and custom applications.", tags:["AWS"]},
  {t:"Fargate", d:"AWS serverless compute engine for ECS and EKS. Run containers without managing EC2 instances. Pay per vCPU and memory used.", tags:["AWS"]},
  {t:"FSx", d:"Amazon FSx — managed file systems for Windows (FSx for Windows), Lustre (HPC), NetApp ONTAP, and OpenZFS workloads.", tags:["AWS"]},
  {t:"Glacier", d:"Amazon S3 Glacier — low-cost archival storage classes for long-term data retention. Retrieval times range from minutes (Instant) to hours (Deep Archive).", tags:["AWS"]},
  {t:"Kinesis", d:"AWS real-time data streaming service. Ingest and process large streams of records (logs, clickstreams, IoT). Alternative to Kafka.", tags:["AWS"]},
  {t:"Route 53", d:"AWS managed DNS service. Supports domain registration, routing policies (weighted, latency, failover, geolocation), and health checks.", tags:["AWS"]},
  {t:"Step Functions", d:"AWS serverless workflow orchestration. Coordinate Lambda, ECS, and other services using visual state machines with error handling and retries.", tags:["AWS"]},
  {t:"API Gateway", d:"AWS managed service to create, publish, and secure REST/WebSocket APIs at any scale. Integrates with Lambda, IAM, and Cognito.", tags:["AWS"]},
  {t:"CodePipeline", d:"AWS fully managed CI/CD service that automates build, test, and deploy stages. Integrates with CodeBuild, CodeDeploy, and GitHub.", tags:["AWS"]},
  {t:"CodeBuild", d:"AWS fully managed build service. Compiles source code, runs tests, produces deployable artifacts. No build servers to manage.", tags:["AWS"]},
  {t:"Config", d:"AWS Config — continuously monitors and records AWS resource configurations. Evaluates compliance rules and tracks configuration history.", tags:["AWS","Security"]},
  {t:"Redshift", d:"AWS managed data warehouse for analytics. Columnar storage, massively parallel processing, SQL queries on petabyte-scale datasets.", tags:["AWS"]},
  {t:"Organizations", d:"AWS Organizations — centrally manage multiple AWS accounts. Apply SCP guardrails, consolidated billing, and account governance.", tags:["AWS"]},
  {t:"Spot Instance", d:"AWS EC2 instances available at up to 90% discount. Can be interrupted with 2-minute notice. Ideal for fault-tolerant batch and data processing.", tags:["AWS"]},
  {t:"Reserved Instance", d:"AWS EC2 pricing model offering up to 72% discount for 1-3 year commitment. Available as Standard (fixed) or Convertible (flexible).", tags:["AWS"]},
  {t:"DAX", d:"DynamoDB Accelerator — a fully managed in-memory cache for DynamoDB. Delivers microsecond read latency. Drop-in compatible with DynamoDB API.", tags:["AWS"]},
  {t:"HCL", d:"HashiCorp Configuration Language — the declarative language used to write Terraform configurations. Also used in Vault policies.", tags:["Terraform","IaC","Vault"]},
  {t:"Provider", d:"A Terraform plugin that interfaces with an API (AWS, Azure, GCP, Kubernetes) to manage Resource objects.", tags:["Terraform","IaC"]},
  {t:"State", d:"Terraform's record of real-world resources it manages. Stored in <code>terraform.tfstate</code>. Use remote backends (S3, Consul) for teams.", tags:["Terraform","IaC"]},
  {t:"Plan", d:"<code>terraform plan</code> — preview changes Terraform will make before applying. Shows creates, updates, and destroys.", tags:["Terraform","IaC"]},
  {t:"Module", d:"A reusable, self-contained package of Terraform configuration. Published on the Terraform Registry for sharing.", tags:["Terraform","IaC"]},
  {t:"Resource", d:"A single infrastructure object managed by Terraform (e.g., an EC2 instance, S3 bucket, VPC, or DNS record).", tags:["Terraform","IaC"]},
  {t:"Data Source", d:"A Terraform read-only query to fetch information about existing infrastructure not managed by the current config.", tags:["Terraform","IaC"]},
  {t:"Workspace", d:"Terraform workspaces allow managing multiple State files (e.g., dev, staging, prod) from the same configuration.", tags:["Terraform","IaC"]},
  {t:"Counter", d:"A Prometheus metric type that only goes up (and resets on restart). Use for request counts, errors. Query with <code>rate()</code>.", tags:["Prometheus"]},
  {t:"Gauge", d:"A Prometheus metric type that can go up or down. Use for temperature, memory usage, active connections.", tags:["Prometheus"]},
  {t:"Histogram", d:"A Prometheus metric type that samples observations into configurable buckets. Use for latency percentiles.", tags:["Prometheus"]},
  {t:"Summary", d:"A Prometheus metric type similar to Histogram but calculates quantiles on the client side. Less flexible for aggregation.", tags:["Prometheus"]},
  {t:"PromQL", d:"Prometheus Query Language — select, aggregate, and transform time series data. Supports <code>rate()</code>, <code>sum()</code>, <code>histogram_quantile()</code>.", tags:["Prometheus"]},
  {t:"Scrape", d:"The process of Prometheus pulling metrics from a target endpoint (Exporter) via HTTP at a configured interval.", tags:["Prometheus"]},
  {t:"Alertmanager", d:"Handles alerts from Prometheus — deduplication, grouping, routing, silencing, and notification dispatch to Slack, PagerDuty, etc.", tags:["Prometheus"]},
  {t:"Exporter", d:"A component that exposes metrics from third-party systems (Node Exporter, MySQL Exporter) in Prometheus Scrape format.", tags:["Prometheus"]},
  {t:"Recording Rule", d:"A pre-computed PromQL query saved as a new time series. Reduces dashboard query-time computation.", tags:["Prometheus"]},
  {t:"Thanos", d:"A CNCF project that adds global query view, long-term S3 storage, deduplication, and downsampling to Prometheus.", tags:["Prometheus"]},
  {t:"Federation", d:"A pattern where hierarchical Prometheus servers Scrape from each other for scaling across clusters.", tags:["Prometheus"]},
  {t:"Secret Engine", d:"A Vault component that stores, generates, or encrypts data. Types include KV, PKI, Transit Engine, database, and AWS.", tags:["Vault","Security"]},
  {t:"Dynamic Secret", d:"A credential generated on-demand by Vault with a TTL. Automatically revoked after expiry. Eliminates long-lived passwords.", tags:["Vault","Security"]},
  {t:"Auth Method", d:"How a client proves its identity to Vault. Methods include AppRole, Kubernetes, OIDC, AWS IAM, LDAP, and Userpass.", tags:["Vault","Security"]},
  {t:"Policy (Vault)", d:"An HCL rule defining which secret paths a Vault token can access and what capabilities (read, write, list, deny) are allowed.", tags:["Vault","Security"]},
  {t:"Seal/Unseal", d:"Vault starts sealed (encrypted). Unsealing requires Shamir's Secret Sharing threshold key shares or auto-unseal via KMS.", tags:["Vault","Security"]},
  {t:"Transit Engine", d:"Vault's Encryption as a Service. Apps send data to Vault for encryption/decryption without ever seeing the key.", tags:["Vault","Security"]},
  {t:"KV", d:"Key-Value secret engine — Vault's simplest Secret Engine for storing static secrets. v2 adds versioning, soft delete, and metadata.", tags:["Vault"]},
  {t:"PKI", d:"Public Key Infrastructure — a Vault Secret Engine that acts as a Certificate Authority, issuing and managing TLS certificates automatically.", tags:["Vault","Security"]},
  {t:"Barrier", d:"Vault's encryption layer that protects all stored data. Uses AES-256-GCM encryption. Data passes through the Barrier before reaching the storage backend.", tags:["Vault","Security"]},
  {t:"Shamir's Secret Sharing", d:"A cryptographic algorithm that splits Vault's master key into N shares, requiring K threshold shares to reconstruct. Used in Seal/Unseal.", tags:["Vault","Security"]},
  {t:"Raft", d:"A consensus algorithm used by Vault (and Consul) for integrated HA storage. Recommended for production: 3 or 5 node clusters.", tags:["Vault","Temporal"]},
  {t:"AppRole", d:"A Vault Auth Method designed for machine-to-machine authentication. Uses a RoleID + SecretID pair, ideal for CI/CD pipelines.", tags:["Vault","Security"]},
  {t:"Consul", d:"A HashiCorp service mesh and service discovery tool. Can serve as a Vault storage backend and provides health checking.", tags:["Vault","Security"]},
  {t:"Namespace (Vault)", d:"Vault Enterprise feature for multi-tenancy. Each namespace has isolated Secret Engine, Auth Method, and Policy (Vault) configurations.", tags:["Vault"]},
  {t:"Workflow (Temporal)", d:"A durable function orchestrated by Temporal. Survives crashes, restarts, and outages via Event Sourcing.", tags:["Temporal"]},
  {t:"Activity (Temporal)", d:"A single unit of work in Temporal (e.g., API call, DB write). Has retry policies, timeouts, and heartbeats.", tags:["Temporal"]},
  {t:"Worker (Temporal)", d:"A process that polls a Task Queue for Workflow (Temporal) and Activity (Temporal) tasks to execute.", tags:["Temporal"]},
  {t:"Task Queue", d:"A named queue in Temporal that routes workflow and activity tasks to the appropriate Worker (Temporal) processes.", tags:["Temporal"]},
  {t:"Signal", d:"An async message sent to a running Workflow (Temporal) to trigger behavior or pass data without stopping execution.", tags:["Temporal"]},
  {t:"Event Sourcing", d:"A pattern where state changes are stored as a sequence of events rather than current state. Core to how Temporal achieves durability.", tags:["Temporal"]},
  {t:"Retry Policy", d:"Configuration in Temporal (and other systems) that controls how failed Activity (Temporal) executions are automatically retried.", tags:["Temporal"]},
  {t:"Saga Pattern", d:"A distributed transaction pattern that breaks a long-running process into steps, each with a compensating action for rollback. Used in Temporal and microservices.", tags:["Temporal","Architecture"]},
  {t:"Durable Execution", d:"A programming model where function execution survives process crashes, restarts, and infrastructure failures. Code resumes exactly where it left off. Core concept in Temporal.", tags:["Temporal","Architecture"]},
  {t:"Agent (Crew AI)", d:"An autonomous AI unit with a role, goal, and backstory. Agents collaborate within a Crew to complete tasks using LLM providers.", tags:["Crew AI"]},
  {t:"Crew", d:"A team of Agent (Crew AI) instances that work together on tasks using a defined process (sequential, hierarchical, or consensual).", tags:["Crew AI"]},
  {t:"Task (Crew AI)", d:"A specific piece of work assigned to an Agent (Crew AI), with a description, expected output, and optional Tool (Crew AI) access.", tags:["Crew AI"]},
  {t:"Tool (Crew AI)", d:"A capability given to an Agent (Crew AI) — search, web scraping, file I/O, or custom Python functions.", tags:["Crew AI"]},
  {t:"LLM", d:"Large Language Model — the AI backbone (GPT, Claude, Llama) that powers Agent (Crew AI) reasoning and text generation.", tags:["Crew AI"]},
  {t:"Zero Trust", d:"A Security model that assumes no implicit trust. Every request must be authenticated, authorized, and encrypted via MFA and Least Privilege.", tags:["Zero Trust","Security"]},
  {t:"ZTNA", d:"Zero Trust Network Access — identity-based, per-application access that replaces traditional VPNs. Providers: Zscaler, Cloudflare Access, Tailscale.", tags:["Zero Trust","Security"]},
  {t:"Micro-segmentation", d:"Dividing a network into isolated segments so a breach in one workload cannot spread laterally. Enforced by Service Mesh or Security Group rules.", tags:["Zero Trust","Security"]},
  {t:"MFA", d:"Multi-Factor Authentication — requiring two or more verification factors (password + OTP, biometric, FIDO2 key). First step in Zero Trust.", tags:["Security","Zero Trust"]},
  {t:"mTLS", d:"Mutual TLS — both client and server present PKI certificates to authenticate each other. Used in Service Mesh for Zero Trust.", tags:["Security","Zero Trust"]},
  {t:"SPIFFE", d:"Secure Production Identity Framework For Everyone — a CNCF standard for cryptographic workload identity using mTLS.", tags:["Zero Trust","Security"]},
  {t:"SIEM", d:"Security Information and Event Management — aggregates and correlates security logs for threat detection (Splunk, Sentinel, Elastic).", tags:["Security"]},
  {t:"Least Privilege", d:"Granting only the minimum permissions needed. Core principle of Zero Trust, IAM, and Policy (Vault).", tags:["Security","Zero Trust","AWS","Vault"]},
  {t:"Service Mesh", d:"An infrastructure layer (Istio, Linkerd, Consul) providing mTLS, Observability, and traffic control between microservices.", tags:["Zero Trust","Security"]},
  {t:"BeyondCorp", d:"Google's pioneering Zero Trust implementation. Eliminated VPNs; all apps accessed via identity-aware Access Proxy.", tags:["Zero Trust","Security"]},
  {t:"PAM", d:"Privileged Access Management — controls and audits elevated access. Supports JIT (just-in-time) access with tools like CyberArk, Vault, Teleport.", tags:["Security","Zero Trust","Vault"]},
  {t:"EDR", d:"Endpoint Detection and Response — monitors devices for threats in real-time (CrowdStrike, SentinelOne, Defender). Part of device trust in Zero Trust.", tags:["Security","Zero Trust"]},
  {t:"SOAR", d:"Security Orchestration, Automation and Response — automates incident response playbooks triggered by SIEM alerts.", tags:["Security"]},
  {t:"DLP", d:"Data Loss Prevention — tools and policies that detect and block sensitive data exfiltration (credit cards, PII, secrets).", tags:["Security","Zero Trust"]},
  {t:"CVE", d:"Common Vulnerabilities and Exposures — a standardized ID system for publicly known security vulnerabilities (e.g., CVE-2024-1234). Tracked in NVD and used for patch management.", tags:["Security"]},
  {t:"Fluentd", d:"An open-source log collector and aggregator (CNCF). Unifies log collection from multiple sources and routes them to destinations like Elasticsearch, Loki, S3, or Kafka.", tags:["Observability","Docker"]},
  {t:"OIDC", d:"OpenID Connect — an identity layer on top of OAuth 2.0 for authenticating users. Returns ID tokens (JWT). Used by Vault Auth Method, ZTNA, and SSO.", tags:["Security","Vault","Zero Trust"]},
  {t:"LDAP", d:"Lightweight Directory Access Protocol — a protocol for accessing directory services (Active Directory, OpenLDAP). Used as a Vault Auth Method.", tags:["Security","Vault"]},
  {t:"SAML", d:"Security Assertion Markup Language — an XML-based SSO protocol for enterprise identity federation. Older than OIDC, still widely used.", tags:["Security","Zero Trust"]},
  {t:"OAuth 2.0", d:"An authorization framework that lets apps obtain limited access to user accounts. OIDC builds on top of OAuth 2.0 for authentication.", tags:["Security"]},
  {t:"JWT", d:"JSON Web Token — a compact, signed token format for transmitting claims between parties. Used by OIDC, API Gateway, and Auth Method.", tags:["Security"]},
  {t:"SSO", d:"Single Sign-On — authenticate once and access multiple applications. Implemented via OIDC or SAML with providers like Okta, Azure AD.", tags:["Security","Zero Trust"]},
  {t:"FIDO2", d:"A passwordless authentication standard using hardware security keys or biometrics. Strongest form of MFA.", tags:["Security","Zero Trust"]},
  {t:"CI/CD", d:"Continuous Integration / Continuous Deployment — automating build, test, and deployment pipelines via GitHub Actions or similar.", tags:["GitHub","CI/CD"]},
  {t:"Container", d:"A lightweight, isolated runtime for applications. Docker containers package code + dependencies. Run on ECS, EKS, or Fargate.", tags:["Linux","AWS"]},
  {t:"DNS", d:"Domain Name System — translates domain names to IP addresses. AWS Route 53 is a managed DNS service with health checks.", tags:["Linux","AWS"]},
  {t:"Encryption at Rest", d:"Encrypting stored data using KMS so it's unreadable without the decryption key. Standard for S3, RDS, EBS.", tags:["Security","AWS","Vault"]},
  {t:"Encryption in Transit", d:"Encrypting data in motion using TLS. Prevents eavesdropping. mTLS adds mutual authentication.", tags:["Security","AWS","Vault"]},
  {t:"Idempotent", d:"An operation that produces the same result regardless of how many times it's executed. Critical for APIs, Terraform, and Temporal.", tags:["Terraform","Temporal"]},
  {t:"Infrastructure as Code (IaC)", d:"Managing infrastructure through code (Terraform, CloudFormation, Pulumi) instead of manual provisioning. Enables version control and review.", tags:["Terraform","AWS"]},
  {t:"Load Balancer", d:"Distributes incoming traffic across multiple targets. AWS ALB (Layer 7 HTTP) and NLB (Layer 4 TCP). Works with ACM for TLS.", tags:["AWS"]},
  {t:"Observability", d:"Understanding system behavior from metrics (Prometheus), logs (CloudWatch), and traces (X-Ray). Visualized with Grafana.", tags:["Prometheus","AWS"]},
  {t:"RBAC", d:"Role-Based Access Control — assigning permissions to roles rather than individual users. Used in IAM, Kubernetes, and Vault.", tags:["Security","AWS","Vault"]},
  {t:"TLS", d:"Transport Layer Security — cryptographic protocol for Encryption in Transit. Successor to SSL. Certificates issued by ACM or PKI.", tags:["Security"]},
  {t:"TTL", d:"Time To Live — how long data remains valid before expiring. Used in DNS, caching (Redis), Vault secrets, and CDN configuration.", tags:["Vault","Redis","AWS"]},
  {t:"Kubernetes", d:"An open-source Container orchestration platform. Manages deployment, scaling, and networking. Runs on AWS EKS or self-managed.", tags:["AWS","Linux"]},
  {t:"Docker", d:"A platform for building and running Container images. Packages applications with dependencies into portable, isolated units.", tags:["Linux"]},
  {t:"Terraform Cloud", d:"HashiCorp's managed service for Terraform. Provides remote State storage, team collaboration, Policy as Code, and CI/CD for IaC.", tags:["Terraform","IaC"]},
  {t:"OSI Model", d:"Open Systems Interconnection — a 7-layer reference model for network communication: Physical, Data Link, Network, Transport, Session, Presentation, Application.", tags:["Networking"]},
  {t:"TCP/IP Model", d:"A 4-layer networking model (Network Access, Internet, Transport, Application) that maps to real-world protocols. Foundation of the internet.", tags:["Networking"]},
  {t:"VLAN", d:"Virtual LAN — logically segments a physical switch into isolated broadcast domains. Configured per port. Uses 802.1Q trunking between switches.", tags:["Networking"]},
  {t:"OSPF", d:"Open Shortest Path First — a link-state routing protocol using Dijkstra's algorithm. Organizes networks into areas. Uses cost metric based on bandwidth.", tags:["Networking"]},
  {t:"EIGRP", d:"Enhanced Interior Gateway Routing Protocol — a Cisco hybrid routing protocol using DUAL algorithm. Fast convergence, supports VLSM and route summarization.", tags:["Networking"]},
  {t:"STP", d:"Spanning Tree Protocol — prevents Layer 2 loops by blocking redundant switch paths. Elects a root bridge and sets port states (forwarding, blocking).", tags:["Networking"]},
  {t:"ACL", d:"Access Control List — a set of rules on a router or firewall that filters traffic by source/destination IP, port, and protocol. Standard (1-99) or Extended.", tags:["Networking","Security"]},
  {t:"NAT", d:"Network Address Translation — maps private IP addresses to public IPs. Types: Static NAT, Dynamic NAT, and PAT (Port Address Translation / overload).", tags:["Networking"]},
  {t:"DHCP", d:"Dynamic Host Configuration Protocol — automatically assigns IP addresses, subnet masks, gateways, and DNS servers to devices. Uses DORA: Discover, Offer, Request, Ack.", tags:["Networking"]},
  {t:"ARP", d:"Address Resolution Protocol — resolves IPv4 addresses to MAC addresses on a local network. Vulnerable to ARP spoofing attacks.", tags:["Networking","Security"]},
  {t:"ICMP", d:"Internet Control Message Protocol — used for diagnostics and error reporting. Powers ping (echo request/reply) and traceroute.", tags:["Networking"]},
  {t:"CIDR", d:"Classless Inter-Domain Routing — IP addressing using prefix notation (e.g., /24 = 256 addresses). Replaces classful addressing for flexible Subnetting.", tags:["Networking"]},
  {t:"Subnetting", d:"Dividing a network into smaller sub-networks using subnet masks. Enables efficient IP allocation and traffic isolation.", tags:["Networking"]},
  {t:"MAC Address", d:"Media Access Control address — a unique 48-bit hardware identifier assigned to every network interface (e.g., AA:BB:CC:DD:EE:FF).", tags:["Networking"]},
  {t:"IPv6", d:"Internet Protocol version 6 — 128-bit addresses (e.g., 2001:db8::1) replacing IPv4. Supports autoconfiguration, IPsec, and eliminates NAT need.", tags:["Networking"]},
  {t:"TCP", d:"Transmission Control Protocol — reliable, connection-oriented Layer 4 protocol. Uses 3-way handshake (SYN, SYN-ACK, ACK), sequencing, and flow control.", tags:["Networking"]},
  {t:"UDP", d:"User Datagram Protocol — connectionless, lightweight Layer 4 protocol. No handshake or guaranteed delivery. Used for DNS, video streaming, gaming.", tags:["Networking"]},
  {t:"Dockerfile", d:"A text file with instructions (FROM, RUN, COPY, CMD, ENTRYPOINT) to build a Docker Container image layer by layer.", tags:["Docker"]},
  {t:"Docker Compose", d:"A tool for defining multi-Container applications in a YAML file (docker-compose.yml). Manages services, networks, and volumes together.", tags:["Docker"]},
  {t:"Container Registry", d:"A storage system for Docker images. Examples: Docker Hub, AWS ECR, GitHub Container Registry. Push and pull images for deployment.", tags:["Docker","AWS"]},
  {t:"Swarm", d:"Docker's native clustering and orchestration tool. Simpler than Kubernetes but less feature-rich. Manages multi-node Container deployments.", tags:["Docker"]},
  {t:"cgroup", d:"Control Group — a Linux Kernel feature that limits and isolates CPU, memory, disk I/O, and network for processes. Core to how Docker containers work.", tags:["Docker","Linux"]},
  {t:"Ephemeral", d:"Short-lived and disposable. In Docker, containers are ephemeral — they can be stopped, destroyed, and replaced at any time. State should live in volumes or external storage.", tags:["Docker","Kubernetes"]},
  {t:"HPA", d:"Horizontal Pod Autoscaler — a Kubernetes resource that automatically scales the number of pod replicas based on CPU, memory, or custom metrics.", tags:["Kubernetes","Docker"]},
  {t:"VPA", d:"Vertical Pod Autoscaler — a Kubernetes component that automatically adjusts CPU and memory requests/limits for pods based on actual usage patterns.", tags:["Kubernetes","Docker"]},
  {t:"CNI", d:"Container Network Interface — a specification and plugin framework for configuring networking in Kubernetes. Implementations: Calico, Cilium, Flannel, Weave.", tags:["Kubernetes","Docker","Networking"]},
  {t:"Decorator", d:"A Python function that wraps another function to extend its behavior using @syntax. Common uses: logging, timing, authentication, caching.", tags:["Python"]},
  {t:"Generator", d:"A Python function using yield to produce values lazily one at a time. Memory-efficient for large datasets. Created with generator expressions or yield.", tags:["Python"]},
  {t:"List Comprehension", d:"Python syntax for creating lists inline: [x**2 for x in range(10)]. Also works for dicts, sets, and generators. Concise and Pythonic.", tags:["Python"]},
  {t:"FastAPI", d:"A modern Python web framework for building APIs. Auto-validates with Pydantic, generates OpenAPI docs, and supports async/await natively.", tags:["Python"]},
  {t:"Flask", d:"A lightweight Python web framework (microframework). Simple routing with decorators, Jinja2 templating, and extensive extension ecosystem.", tags:["Python"]},
  {t:"pandas", d:"Python data analysis library. Provides DataFrame for tabular data manipulation: filtering, grouping, joining, pivoting, and CSV/Excel I/O.", tags:["Python"]},
  {t:"pytest", d:"The most popular Python testing framework. Features: fixtures, parametrize, markers, plugins, and assertion introspection. Run with pytest -v.", tags:["Python"]},
  {t:"pip", d:"Python's package installer. Installs packages from PyPI: pip install flask. Use with virtual environments and requirements.txt for reproducibility.", tags:["Python"]},
  {t:"venv", d:"Python's built-in virtual environment module. Creates isolated environments to avoid dependency conflicts: python -m venv .venv.", tags:["Python"]},
  {t:"Closure", d:"A JavaScript function that retains access to its outer scope variables even after the outer function returns. Powers data privacy and factory patterns.", tags:["JavaScript"]},
  {t:"Promise", d:"A JavaScript object representing an async operation's eventual result. States: pending, fulfilled, rejected. Chain with .then()/.catch() or use async/await.", tags:["JavaScript","Node.js"]},
  {t:"DOM", d:"Document Object Model — a tree representation of HTML that JavaScript can manipulate. Access with querySelector, modify with textContent, classList, innerHTML.", tags:["JavaScript"]},
  {t:"Event Loop", d:"The mechanism that handles async operations in JavaScript. Processes call stack, microtasks (Promises), then macrotasks (setTimeout, I/O) in order.", tags:["JavaScript","Node.js"]},
  {t:"Arrow Function", d:"Concise JavaScript function syntax: (a, b) => a + b. Lexically binds 'this'. Preferred for callbacks. Cannot be used as constructors.", tags:["JavaScript"]},
  {t:"Destructuring", d:"JavaScript syntax to extract values from arrays or objects: const {name, age} = user; const [first, ...rest] = arr;", tags:["JavaScript"]},
  {t:"Express", d:"The most popular Node.js web framework. Provides routing, middleware pipeline, request/response handling, and static file serving.", tags:["Node.js"]},
  {t:"Middleware", d:"Functions in Express/Node.js that process requests in a pipeline. Each calls next() to pass control. Used for auth, logging, CORS, error handling.", tags:["Node.js"]},
  {t:"npm", d:"Node Package Manager — the default package manager for Node.js. Manages dependencies via package.json. Registry hosts 2M+ packages.", tags:["Node.js"]},
  {t:"Maven", d:"A build automation and dependency management tool for Java projects. Uses pom.xml for configuration. Central repository hosts thousands of libraries.", tags:["Java","Build"]},
  {t:"NuGet", d:"The package manager for .NET. Manages dependencies via .csproj or packages.config. Hosts libraries on nuget.org for C#, F#, and VB.NET projects.", tags:[".NET","Build"]},
  {t:"REST API", d:"Representational State Transfer API — an architectural style using HTTP methods (GET, POST, PUT, DELETE) with resource-based URLs and JSON responses.", tags:["Node.js","AWS"]},
  {t:"Stream", d:"A Node.js abstraction for processing data piece by piece. Types: Readable, Writable, Transform, Duplex. Efficient for large files and network I/O.", tags:["Node.js"]},
  {t:"IntelliSense", d:"VS Code's code completion engine. Provides auto-complete, parameter hints, type info, and quick documentation. Powered by language servers (LSP).", tags:["VS Code"]},
  {t:"Emmet", d:"A markup expansion tool built into VS Code. Type abbreviations like div.card>h3+p and press Tab to expand into full HTML.", tags:["VS Code"]},
  {t:"launch.json", d:"VS Code debugger configuration file. Defines how to start debugging: program entry, environment variables, args, attach vs launch modes.", tags:["VS Code"]},
  {t:"GitLens", d:"A VS Code extension that supercharges Git. Shows blame annotations, file history, commit search, and visual branch comparisons.", tags:["VS Code","Git"]},
  {t:"Auto Layout", d:"Figma's most powerful feature — similar to CSS Flexbox. Controls direction, padding, gap, and sizing (Hug/Fill/Fixed) for responsive frame design.", tags:["Figma"]},
  {t:"Component (Figma)", d:"A reusable design element in Figma. Main component is the source of truth; instances inherit changes. Supports variants for multiple states.", tags:["Figma"]},
  {t:"Prototype", d:"An interactive mockup in Figma. Connect frames with interactions (click, hover, drag), add animations (Smart Animate), and share with stakeholders.", tags:["Figma"]},
  {t:"Design Token", d:"A named value (color, spacing, typography) that represents a design decision. Enables consistent theming and light/dark mode via Figma Variables.", tags:["Figma"]},
  {t:"FigJam", d:"Figma's whiteboarding tool for brainstorming. Features sticky notes, flowcharts, voting, timers, and templates for workshops and retrospectives.", tags:["Figma"]},
  {t:"Composer", d:"Cursor AI's multi-file editing agent (Ctrl+I). Describe a feature in natural language and Composer edits multiple files simultaneously with checkpoints.", tags:["Cursor AI"]},
  {t:"Cursor Rules", d:"Project-level AI instructions stored in .cursor/rules. Define coding standards, frameworks, naming conventions, and preferences that shape AI responses.", tags:["Cursor AI"]},
  {t:"Codebase Indexing", d:"Cursor's automatic embedding of your project files for semantic search. Powers @codebase queries. Configure exclusions with .cursorignore.", tags:["Cursor AI"]},
  {t:"MCP", d:"Model Context Protocol — an open standard for connecting AI tools to external services. Claude Code uses MCP servers for GitHub, databases, and custom tools.", tags:["Claude Code"]},
  {t:"CLAUDE.md", d:"A project-level instruction file for Claude Code. Defines coding standards, project context, and preferences. Read automatically when entering a directory.", tags:["Claude Code"]},
  {t:"Claude Agent SDK", d:"A TypeScript SDK for building custom AI agents powered by Claude. Provides tool execution, multi-agent orchestration, streaming, and conversation management.", tags:["Claude Code"]},
  {t:"Skill (Claude Code)", d:"A reusable prompt template invoked via /skill-name in Claude Code. Stored as .md files in .claude/skills/. Enables team-shared workflows like deploy, review, and migration scripts.", tags:["Claude Code"]},
  {t:"Headless Mode", d:"Running Claude Code non-interactively via the -p flag. Used in CI/CD pipelines, scripts, and automation. Supports JSON output and full-auto permissions.", tags:["Claude Code"]},
  {t:"Sub-Agent", d:"A specialized child process spawned by Claude Code for parallel work. Types: Explore (search), Plan (architecture), General (multi-step). Can run in background or isolated worktrees.", tags:["Claude Code"]},
  {t:"JSX", d:"JavaScript XML — a syntax extension that lets you write HTML-like markup inside JavaScript. Compiled by Babel/SWC into React.createElement calls.", tags:["React"]},
  {t:"React Hook", d:"Functions (useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer) that let functional components manage state and side effects.", tags:["React"]},
  {t:"Redux Toolkit", d:"The official, recommended way to write Redux. Includes createSlice, configureStore, createAsyncThunk, and RTK Query. Eliminates boilerplate.", tags:["React","Redux"]},
  {t:"RTK Query", d:"Data fetching and caching built into Redux Toolkit. Auto-generates hooks (useGetUsersQuery). Handles loading, caching, and cache invalidation.", tags:["React","Redux"]},
  {t:"React Router", d:"The standard routing library for React SPAs. Provides BrowserRouter, Routes, Route, Link, useParams, useNavigate for client-side navigation.", tags:["React"]},
  {t:"Virtual DOM", d:"React's in-memory representation of the real DOM. React diffs the virtual DOM to compute minimal updates, making re-renders efficient.", tags:["React"]},
  {t:"Server Component", d:"A React 19 component that renders on the server. Zero client-side JS bundle. Can directly access databases, file systems, and APIs.", tags:["React"]},
  {t:"Playwright", d:"A cross-browser E2E testing framework by Microsoft. Supports Chromium, Firefox, and WebKit with a single API, auto-waiting, and test isolation.", tags:["Playwright"]},
  {t:"Locator (Playwright)", d:"Playwright's primary element selection API. Auto-waits and auto-retries. Prefer getByRole, getByLabel, getByText, and getByTestId over CSS selectors.", tags:["Playwright"]},
  {t:"Page Object Model", d:"A design pattern for E2E tests that encapsulates page elements and actions into reusable classes. Reduces duplication and improves test maintainability.", tags:["Playwright"]},
  {t:"Browser Context", d:"An isolated browser session in Playwright. Like an incognito window — separate cookies, storage, and cache. Each test gets its own context for isolation.", tags:["Playwright"]},
  {t:"Fixture (Playwright)", d:"A setup/teardown mechanism in Playwright tests. Built-in fixtures provide page, browser, context. Custom fixtures add auth, test data, or page objects.", tags:["Playwright"]},
  {t:"Trace Viewer", d:"Playwright's time-travel debugger. Records DOM snapshots, network requests, console logs, and actions at each step. View with npx playwright show-trace.", tags:["Playwright"]},
  {t:"Codegen", d:"Playwright's test recorder. Run npx playwright codegen to open a browser, interact with the app, and auto-generate test code from your actions.", tags:["Playwright"]},
  {t:"Network Interception", d:"Playwright's page.route() API for mocking, modifying, or aborting network requests. Used to mock APIs, block analytics, or simulate errors in tests.", tags:["Playwright"]},
  {t:"MongoDB", d:"A document-oriented NoSQL database storing data as JSON-like BSON documents. Flexible schema, horizontal scaling via sharding, and rich aggregation pipeline.", tags:["MongoDB"]},
  {t:"Document (MongoDB)", d:"A JSON-like BSON record in MongoDB. Can contain nested objects, arrays, and typed data. Maximum size 16 MB. Identified by a unique _id field.", tags:["MongoDB"]},
  {t:"Collection", d:"A group of MongoDB documents, analogous to a SQL table. Collections have no enforced schema — documents can have different fields.", tags:["MongoDB"]},
  {t:"Aggregation Pipeline", d:"MongoDB's data processing framework. Chain stages ($match, $group, $sort, $lookup, $project, $unwind) to transform and analyze documents.", tags:["MongoDB"]},
  {t:"Mongoose", d:"The most popular Node.js ODM (Object Document Mapper) for MongoDB. Provides schemas, validation, middleware, and populate for document references.", tags:["MongoDB","Node.js"]},
  {t:"Replica Set (MongoDB)", d:"A group of MongoDB instances maintaining the same data set. One primary handles writes; secondaries replicate for high availability and read scaling.", tags:["MongoDB"]},
  {t:"Sharding (MongoDB)", d:"MongoDB's horizontal scaling strategy. Data is distributed across shards using a shard key. Each shard is a replica set. Managed by mongos routers.", tags:["MongoDB"]},
  {t:"ObjectId", d:"MongoDB's default 12-byte unique identifier for documents. Contains timestamp, machine ID, process ID, and counter. Auto-generated for _id field.", tags:["MongoDB"]},
  {t:"Neo4j", d:"The most popular native graph database. Uses Cypher query language, index-free adjacency for O(1) traversals, and ACID transactions.", tags:["Graph DB"]},
  {t:"Cypher", d:"Neo4j's declarative graph query language. Uses ASCII-art patterns: (node)-[RELATIONSHIP]->(node). Supports MATCH, CREATE, MERGE, and aggregation.", tags:["Graph DB"]},
  {t:"Gremlin", d:"Apache TinkerPop's graph traversal language. Used by Amazon Neptune, Azure Cosmos DB, and JanusGraph. Imperative, step-based traversal API.", tags:["Graph DB"]},
  {t:"Graph Node", d:"An entity in a graph database (person, product, place). Has labels (types) and properties (key-value data). Connected by relationships.", tags:["Graph DB"]},
  {t:"Graph Relationship", d:"A typed, directed connection between two nodes in a graph database. Has a type (KNOWS, WORKS_AT), direction, and optional properties.", tags:["Graph DB"]},
  {t:"PageRank", d:"A graph algorithm that measures node importance by counting and weighting incoming connections. Used in Neo4j GDS for influence analysis.", tags:["Graph DB"]},
  {t:"Knowledge Graph", d:"A structured representation of real-world entities and their relationships. Powers search engines, recommendations, and GraphRAG for LLM applications.", tags:["Graph DB","AI"]},
  {t:"Grafana", d:"Open-source observability platform for dashboards, visualization, and alerting. Connects to Prometheus, Loki, Tempo, and 100+ data sources.", tags:["Grafana","Observability"]},
  {t:"Loki", d:"Grafana's log aggregation system. Like Prometheus but for logs. Uses labels for indexing (not full-text), making it cost-efficient. Queried with LogQL.", tags:["Grafana","Observability"]},
  {t:"Tempo", d:"Grafana's distributed tracing backend. Stores traces from OpenTelemetry, Jaeger, and Zipkin. Object-storage based, no indexing required.", tags:["Grafana","Observability"]},
  {t:"Mimir", d:"Grafana's long-term, horizontally scalable Prometheus metrics storage. Drop-in replacement for Prometheus remote write. Supports 1B+ active series.", tags:["Grafana","Observability"]},
  {t:"LogQL", d:"Loki's query language for searching and aggregating logs. Combines stream selectors {job='app'} with filter expressions |= 'error' and metric queries.", tags:["Grafana","Observability"]},
  {t:"TraceQL", d:"Tempo's query language for searching distributed traces. Filter by service, duration, status, and span attributes. Supports structural parent-child queries.", tags:["Grafana","Observability"]},
  {t:"OpenTelemetry", d:"A vendor-neutral observability framework (CNCF). Provides APIs, SDKs, and the OTLP protocol for collecting metrics, logs, and traces from applications.", tags:["Grafana","Observability"]},
  {t:"Exemplar", d:"A trace ID attached to a Prometheus metric data point. Enables clicking from a metric spike directly to the distributed trace that caused it.", tags:["Grafana","Prometheus"]},
  {t:"Kafka Topic", d:"A named, append-only log in Apache Kafka. Producers write messages to topics and consumers read from them. Topics are split into partitions for parallelism.", tags:["Kafka"]},
  {t:"Kafka Partition", d:"A unit of parallelism within a Kafka Topic. Each partition is an ordered, immutable sequence of messages. Partitions enable horizontal scaling of consumers.", tags:["Kafka"]},
  {t:"Consumer Group", d:"A set of Kafka consumers that cooperatively read from a topic. Each partition is assigned to exactly one consumer in the group, enabling parallel processing.", tags:["Kafka"]},
  {t:"Kafka Producer", d:"A client that publishes messages to Kafka Topics. Configurable for throughput (batching, linger.ms) and durability (acks=all for strongest guarantee).", tags:["Kafka"]},
  {t:"Kafka Connect", d:"A framework for streaming data between Kafka and external systems (databases, S3, Elasticsearch). Uses source and sink connectors without writing code.", tags:["Kafka"]},
  {t:"Kafka Streams", d:"A client library for building real-time stream processing applications on Kafka. Supports stateful operations, windowing, joins, and exactly-once processing.", tags:["Kafka"]},
  {t:"Schema Registry", d:"A service that stores and validates Avro, Protobuf, or JSON schemas for Kafka messages. Enforces compatibility rules to prevent breaking changes.", tags:["Kafka"]},
  {t:"Offset", d:"A sequential ID assigned to each message within a Kafka Partition. Consumers track offsets to know which messages have been processed.", tags:["Kafka"]},
  {t:"Broker", d:"A Kafka server that stores data and serves client requests. A Kafka cluster consists of multiple brokers for fault tolerance and scalability.", tags:["Kafka"]},
  {t:"Exactly-Once Semantics", d:"Kafka's strongest delivery guarantee. Uses idempotent producers and transactional APIs to ensure each message is processed exactly once, even across failures.", tags:["Kafka"]},
  {t:"PostgreSQL", d:"An advanced open-source relational database known for extensibility, ACID compliance, JSONB support, and powerful query optimization.", tags:["PostgreSQL"]},
  {t:"JSONB", d:"PostgreSQL's binary JSON data type. Supports indexing (GIN), containment queries (@>), path expressions, and combines relational and document-model flexibility.", tags:["PostgreSQL"]},
  {t:"EXPLAIN ANALYZE", d:"PostgreSQL command that executes a query and shows the actual execution plan with timing, row counts, and buffer usage. Essential for query optimization.", tags:["PostgreSQL"]},
  {t:"GIN Index", d:"Generalized Inverted Index in PostgreSQL. Ideal for indexing JSONB, arrays, full-text search, and other composite data types.", tags:["PostgreSQL"]},
  {t:"CTE", d:"Common Table Expression — a WITH clause that creates named temporary result sets in SQL. Improves readability. Recursive CTEs enable tree/graph traversal.", tags:["PostgreSQL","SQL"]},
  {t:"Window Function", d:"SQL functions (ROW_NUMBER, RANK, LAG, SUM OVER) that compute values across rows related to the current row without collapsing them into groups.", tags:["PostgreSQL","SQL"]},
  {t:"MVCC", d:"Multi-Version Concurrency Control — PostgreSQL's approach to handling concurrent access. Each transaction sees a snapshot, avoiding read locks.", tags:["PostgreSQL"]},
  {t:"pg_dump", d:"PostgreSQL's logical backup utility. Exports database objects and data as SQL or custom format. Use with pg_restore for flexible recovery.", tags:["PostgreSQL"]},
  {t:"Extension (PostgreSQL)", d:"A PostgreSQL plugin that adds functionality: PostGIS (spatial), pg_trgm (fuzzy search), pgcrypto (encryption), TimescaleDB (time-series), and 1000+ more.", tags:["PostgreSQL"]},
  {t:"WAL", d:"Write-Ahead Log — PostgreSQL's transaction log that ensures durability. Changes are written to WAL before data files. Also powers streaming replication.", tags:["PostgreSQL"]},
  {t:"Redis", d:"An in-memory data structure store used as cache, message broker, and database. Supports strings, hashes, lists, sets, sorted sets, and streams.", tags:["Redis"]},
  {t:"Redis Sorted Set", d:"A Redis data structure where each member has a score. Enables ranked queries (ZRANGE), leaderboards, rate limiting, and priority queues in O(log N).", tags:["Redis"]},
  {t:"Redis Stream", d:"A Redis data structure for append-only event logs. Supports consumer groups, acknowledgment, and exactly-once processing — like a lightweight Kafka.", tags:["Redis"]},
  {t:"Redis Pub/Sub", d:"Redis's publish/subscribe messaging system. Publishers send to channels, subscribers receive in real-time. Fire-and-forget — no message persistence.", tags:["Redis"]},
  {t:"Redis Sentinel", d:"A system for high availability in Redis. Monitors master/replica instances, performs automatic failover, and provides service discovery for clients.", tags:["Redis"]},
  {t:"Redis Cluster", d:"Redis's built-in sharding solution. Automatically partitions data across multiple nodes using hash slots (16384 total). Provides HA and horizontal scaling.", tags:["Redis"]},
  {t:"Cache-Aside", d:"A caching pattern where the application checks Redis first, fetches from the database on miss, then stores the result in Redis for future requests.", tags:["Redis"]},
  {t:"RDB Snapshot", d:"Redis's point-in-time persistence mechanism. Creates a binary dump of the entire dataset. Fast to load but may lose recent data between snapshots.", tags:["Redis"]},
  {t:"AOF", d:"Append-Only File — Redis persistence that logs every write operation. More durable than RDB snapshots. Can be configured for fsync every second or every write.", tags:["Redis"]},
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

        const matched = new Set();
        termNames.forEach(name => {
          if (matched.has(name.toLowerCase())) return;
          const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const re = new RegExp('\\b' + escaped + '\\b');
          if (re.test(safe)) {
            safe = safe.replace(re, '\x00' + prot.length + '\x00');
            prot.push('<span class="term-link" data-term="' + name + '">' + name + '</span>');
            matched.add(name.toLowerCase());
            changed = true;
          }
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








