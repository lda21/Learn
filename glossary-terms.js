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
  {t:"Kubernetes", d:"An open-source container orchestration platform (K8s). Automates deployment, scaling, and management of containerized applications. Key components: Pods, Deployments, Services, Ingress.", tags:["Kubernetes","AWS","Linux"]},
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
  {t:"Pod", d:"The smallest deployable unit in Kubernetes. A Pod wraps one or more containers that share networking (same IP) and storage. Defined in YAML manifests.", tags:["Kubernetes"]},
  {t:"Deployment", d:"A Kubernetes resource that manages ReplicaSets and provides declarative updates for Pods. Supports rolling updates, rollbacks, and scaling.", tags:["Kubernetes"]},
  {t:"ReplicaSet", d:"Ensures a specified number of identical Pod replicas are running at all times. Managed by Deployments — rarely created directly.", tags:["Kubernetes"]},
  {t:"StatefulSet", d:"A Kubernetes workload for stateful applications (databases, queues). Provides stable network identities, persistent storage, and ordered deployment.", tags:["Kubernetes"]},
  {t:"DaemonSet", d:"Ensures a copy of a Pod runs on every node (or selected nodes). Used for log collectors, monitoring agents, and network plugins.", tags:["Kubernetes"]},
  {t:"Service", d:"A Kubernetes abstraction that exposes Pods as a stable network endpoint. Types: ClusterIP (internal), NodePort, LoadBalancer, ExternalName.", tags:["Kubernetes","Networking"]},
  {t:"Ingress", d:"A Kubernetes API object that manages external HTTP/HTTPS access to Services. Provides routing rules, TLS termination, and virtual hosting.", tags:["Kubernetes","Networking"]},
  {t:"ConfigMap", d:"A Kubernetes object for storing non-sensitive configuration data as key-value pairs. Injected into Pods as environment variables or mounted files.", tags:["Kubernetes"]},
  {t:"Secret", d:"A Kubernetes object for storing sensitive data (passwords, tokens, keys). Base64-encoded by default — use external solutions for encryption at rest.", tags:["Kubernetes","Security"]},
  {t:"PersistentVolume", d:"A piece of storage provisioned in a Kubernetes cluster. Exists independently of Pods. Bound to PersistentVolumeClaims for Pod consumption.", tags:["Kubernetes"]},
  {t:"PersistentVolumeClaim", d:"A request for storage by a Pod in Kubernetes. Binds to a PersistentVolume. Specifies size, access mode (ReadWriteOnce, ReadWriteMany), and storage class.", tags:["Kubernetes"]},
  {t:"Namespace", d:"A virtual cluster within Kubernetes for isolating resources. Default namespaces: default, kube-system, kube-public. Used for multi-team/multi-env separation.", tags:["Kubernetes"]},
  {t:"etcd", d:"A distributed key-value store used as Kubernetes' backing store for all cluster data. Stores configuration, state, and metadata. Requires regular backups.", tags:["Kubernetes"]},
  {t:"kubelet", d:"An agent running on each Kubernetes node. Ensures containers described in PodSpecs are running and healthy. Communicates with the API server.", tags:["Kubernetes"]},
  {t:"kube-proxy", d:"A network proxy on each Kubernetes node. Maintains network rules for Service communication using iptables or IPVS.", tags:["Kubernetes","Networking"]},
  {t:"kubectl", d:"The Kubernetes command-line tool. Manages clusters and resources: kubectl apply, get, describe, logs, exec, delete, scale, rollout.", tags:["Kubernetes","CLI"]},
  {t:"Helm", d:"The package manager for Kubernetes. Uses Charts (templated YAML) to define, install, and upgrade applications. Supports values overrides and repositories.", tags:["Kubernetes"]},
  {t:"Taint", d:"A Kubernetes node property that repels Pods unless they have a matching Toleration. Used to dedicate nodes for specific workloads.", tags:["Kubernetes"]},
  {t:"Toleration", d:"A Pod specification that allows scheduling onto nodes with matching Taints. Works with taints for node affinity control.", tags:["Kubernetes"]},
  {t:"CronJob", d:"A Kubernetes resource that creates Jobs on a time-based schedule (cron syntax). Used for periodic tasks like backups, reports, and cleanup.", tags:["Kubernetes"]},
  {t:"Liveness Probe", d:"A Kubernetes health check that determines if a container is running. If it fails, the kubelet restarts the container. Types: HTTP, TCP, exec.", tags:["Kubernetes"]},
  {t:"Readiness Probe", d:"A Kubernetes health check that determines if a container is ready to accept traffic. Failing Pods are removed from Service endpoints.", tags:["Kubernetes"]},
  {t:"gRPC", d:"A high-performance RPC framework by Google. Uses HTTP/2, Protocol Buffers for serialization, supports 4 communication patterns: unary, server streaming, client streaming, and bidirectional streaming.", tags:["gRPC","Networking","Microservices"]},
  {t:"Protocol Buffers", d:"Google's language-neutral binary serialization format (Protobuf). Define messages and services in .proto files, generate type-safe client/server code. Smaller and faster than JSON.", tags:["gRPC","Serialization"]},
  {t:"Protobuf", d:"Short for Protocol Buffers — a binary serialization format used by gRPC. Defines strongly-typed schemas in .proto files compiled by protoc into language-specific code.", tags:["gRPC","Serialization"]},
  {t:"Marten", d:"A .NET library that turns PostgreSQL into a document database and event store. Uses JSONB for document storage and append-only tables for event sourcing with projections.", tags:["PostgreSQL",".NET","Event Sourcing"]},
  {t:"TimescaleDB", d:"A PostgreSQL extension for time-series data. Provides hypertables (auto-partitioned by time), compression (90%+), continuous aggregates, and standard SQL interface.", tags:["PostgreSQL","Time-Series"]},
  {t:"Feast", d:"An open-source feature store for machine learning. Manages feature pipelines from batch/streaming sources to online serving. Ensures consistent features between training and inference.", tags:["ML","Data"]},
  {t:"OTLP", d:"OpenTelemetry Protocol — the native protocol for transmitting telemetry data (traces, metrics, logs) between OpenTelemetry SDKs and backends. Supports gRPC and HTTP transports.", tags:["Observability","OpenTelemetry"]},
  {t:"ADR", d:"Architecture Decision Record — a document capturing a significant architectural decision, its context, the decision made, and consequences. Provides an immutable history of why decisions were made.", tags:["Architecture","Documentation"]},
  {t:"C4 Model", d:"A hierarchical approach to software architecture diagrams. Four levels: Context (system boundaries), Container (applications/services), Component (internal structure), Code (class-level detail).", tags:["Architecture","Diagrams"]},
  {t:"SRS", d:"Software Requirements Specification — a document defining functional and non-functional requirements, acceptance criteria, and system constraints. Maps user stories to technical requirements.", tags:["Architecture","Documentation"]},
  {t:"SLO", d:"Service Level Objective — a target value for a service level indicator (e.g., 99.9% availability). Defines the reliability goal. SLAs are contracts built on SLOs.", tags:["Operations","Architecture"]},
  {t:"SLI", d:"Service Level Indicator — a quantitative measure of a service aspect (latency, error rate, throughput). SLIs feed into SLOs to track whether reliability targets are met.", tags:["Operations","Architecture"]},
  {t:"Circuit Breaker", d:"A resilience pattern that stops calling a failing service after a threshold of errors. States: Closed (normal) → Open (failing, reject calls) → Half-Open (test recovery).", tags:["Architecture","Microservices"]},
  {t:"CAP Theorem", d:"States that a distributed system can guarantee only 2 of 3 properties: Consistency (all nodes see same data), Availability (every request gets a response), Partition tolerance (survives network splits).", tags:["Architecture","Distributed"]},
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
  {t:"Canonical Schema", d:"A standardized, agreed-upon data format shared across services or systems. Acts as the single source of truth for a data entity's shape, ensuring consistency across producers and consumers.", tags:["Data Architecture","API"]},
  {t:"Materialized View", d:"A precomputed query result stored as a physical table in the database. Unlike regular views, materialized views cache the result and must be refreshed (manually or on schedule) to reflect source changes. Used for expensive aggregations and read-heavy workloads.", tags:["Database","PostgreSQL"]},
  {t:"DAG", d:"Directed Acyclic Graph — a graph where edges have direction and no cycles exist (you can never follow edges back to where you started). Used everywhere: Git commit history, Airflow task dependencies, Terraform resource ordering, Kafka Streams topologies, and CI/CD pipeline stages. If A depends on B and B depends on C, that's a DAG: C → B → A.", tags:["Data Architecture","CI/CD","Orchestration"]},
  {t:"Linux Foundation", d:"A nonprofit technology consortium founded in 2000 that provides a vendor-neutral home for open source projects. Hosts 900+ projects including Linux, Kubernetes, PyTorch, and MCP. Provides governance, infrastructure, legal, training, and events.", tags:["Linux Foundation"]},
  {t:"CNCF", d:"Cloud Native Computing Foundation — a Linux Foundation sub-foundation that hosts cloud-native projects like Kubernetes, Prometheus, Envoy, containerd, Helm, and Istio. Projects go through sandbox → incubating → graduated lifecycle.", tags:["Linux Foundation","Kubernetes","Cloud Native"]},
  {t:"MCP", d:"Model Context Protocol — an open protocol for connecting AI models to external data sources and tools. Originated at Anthropic, donated to the Linux Foundation. Defines Resources, Tools, Prompts, and Sampling primitives.", tags:["Linux Foundation","AI","MCP"]},
  {t:"OpenSSF", d:"Open Source Security Foundation — a Linux Foundation initiative to secure the open source supply chain. Key projects include Scorecard (security health checks), Sigstore (keyless signing), SLSA (supply chain levels), and GUAC.", tags:["Linux Foundation","Security"]},
  {t:"SLSA", d:"Supply-chain Levels for Software Artifacts — an OpenSSF framework with four levels of increasing supply chain security, from documented builds (L1) to hermetic, two-party-reviewed builds (L4).", tags:["Linux Foundation","Security"]},
  {t:"Sigstore", d:"A keyless code signing and verification project under OpenSSF. Components include <code>cosign</code> (container signing), Rekor (transparency log), and Fulcio (certificate authority).", tags:["Linux Foundation","Security"]},
  {t:"SPDX", d:"Software Package Data Exchange — an ISO/IEC 5962 standard for Software Bills of Materials (SBOMs). Machine-readable format documenting packages, licenses, and dependencies. Required by US Executive Order 14028.", tags:["Linux Foundation","Compliance"]},
  {t:"OpenChain", d:"An ISO 5230 international standard for open source license compliance programs. Helps organizations establish trustworthy processes for managing open source software.", tags:["Linux Foundation","Compliance"]},
  {t:"RISC-V", d:"An open, free instruction set architecture (ISA) hosted by RISC-V International under the Linux Foundation. Modular design with base integer instructions plus extensions (M, A, F, D, C). No licensing fees required.", tags:["Linux Foundation","Hardware"]},
  {t:"Hyperledger Fabric", d:"A modular, enterprise-grade blockchain platform under Hyperledger (Linux Foundation). Features channels for privacy, chaincode (smart contracts) in Go/Java/Node, and pluggable consensus.", tags:["Linux Foundation","Blockchain"]},
  {t:"Zephyr RTOS", d:"A Linux Foundation real-time operating system for IoT and embedded devices. Supports 500+ boards, runs on devices with less than 8KB RAM, and provides Bluetooth, WiFi, Thread, and LoRaWAN connectivity.", tags:["Linux Foundation","IoT","Embedded"]},
  {t:"AGL", d:"Automotive Grade Linux — a Linux Foundation project providing a shared Linux-based platform for automotive applications including infotainment, telematics, and instrument clusters. Adopted by Toyota, Mercedes, Mazda.", tags:["Linux Foundation","Automotive"]},
  {t:"LFX", d:"The Linux Foundation's unified platform for open source project management. Includes LFX Insights (contributor analytics), Mentorship, Security (vulnerability detection), Crowdfunding, and EasyCLA.", tags:["Linux Foundation","Tooling"]},
  {t:"OpenSearch", d:"A community-driven, Apache 2.0-licensed fork of Elasticsearch and Kibana, hosted by the Linux Foundation. Provides full-text search, analytics, observability, and vector search for AI applications.", tags:["Linux Foundation","Search","Analytics"]},
  {t:"Hypervisor", d:"Software that creates and manages virtual machines. Type 1 (bare metal) runs directly on hardware (ESXi, KVM, Xen). Type 2 (hosted) runs atop a host OS (VirtualBox, VMware Workstation).", tags:["Virtualization"]},
  {t:"KVM", d:"Kernel-based Virtual Machine — a Linux kernel module that turns the kernel into a Type 1 hypervisor. Uses Intel VT-x or AMD-V hardware extensions. Each VM is a regular Linux process.", tags:["Virtualization","Linux"]},
  {t:"VMM", d:"Virtual Machine Monitor — the userspace process that manages a VM's device model, I/O, and configuration. KVM handles CPU/memory virtualization; the VMM handles everything else. Examples: QEMU, Firecracker.", tags:["Virtualization"]},
  {t:"QEMU", d:"Quick EMUlator — a full-system emulator and VMM. Can emulate entire CPUs in software or pair with KVM for near-native performance. Emulates hundreds of devices including PCI, USB, and GPU.", tags:["Virtualization"]},
  {t:"Firecracker", d:"An open-source microVM monitor built by AWS in Rust. Boots in <125ms with <5MB overhead. Minimal device model (5 virtio devices). Powers AWS Lambda and Fargate.", tags:["Virtualization","MicroVM"]},
  {t:"MicroVM", d:"A lightweight virtual machine with a minimal device model, designed for fast boot and low overhead. Combines container-like speed with VM-level hardware isolation. Examples: Firecracker, Cloud Hypervisor.", tags:["Virtualization"]},
  {t:"virtio", d:"A standardized para-virtualized I/O framework. The guest knows it's virtualized and uses optimized drivers instead of emulated hardware. Devices include virtio-net, virtio-blk, and virtio-vsock.", tags:["Virtualization"]},
  {t:"Namespace", d:"A Linux kernel feature that isolates system resources (PID, network, mount, user, IPC, UTS, cgroup) between processes. The foundation of container isolation alongside Cgroup.", tags:["Virtualization","Containers","Linux"]},
  {t:"Cgroup", d:"Control Group — a Linux kernel feature that limits and accounts for resource usage (CPU, memory, I/O, PIDs) of process groups. cgroups v2 provides a unified hierarchy.", tags:["Virtualization","Containers","Linux"]},
  {t:"Kata Containers", d:"A CNCF project that runs OCI containers inside lightweight VMs. Compatible with Docker and Kubernetes via CRI-O/containerd. Supports QEMU, Firecracker, and Cloud Hypervisor as VMMs.", tags:["Virtualization","Containers"]},
  {t:"Cloud Hypervisor", d:"A Rust-based VMM built on rust-vmm crates. Richer than Firecracker with PCI, VFIO, UEFI boot, and device hotplug. Backed by Intel, Microsoft, and ARM.", tags:["Virtualization","MicroVM"]},
  {t:"rust-vmm", d:"A set of shared Rust crates for building VMMs. Includes kvm-ioctls, vm-memory, vm-virtio, and linux-loader. Used by Firecracker, Cloud Hypervisor, and CrosVM.", tags:["Virtualization","Rust"]},
  {t:"EPT", d:"Extended Page Tables — Intel's hardware support for nested memory translation in VMs. Eliminates expensive shadow page table walks. AMD equivalent is NPT (Nested Page Tables).", tags:["Virtualization"]},
  {t:"vsock", d:"A VM socket protocol for communication between a host and guest VM without using TCP/IP networking. Used by Firecracker for host-to-guest IPC via <code>virtio-vsock</code>.", tags:["Virtualization"]},
  {t:"Seccomp", d:"Secure Computing mode — a Linux kernel feature that restricts which system calls a process can make. Firecracker uses seccomp BPF filters to limit the VMM's syscall surface.", tags:["Virtualization","Security"]},
  {t:"MCP", d:"Model Context Protocol — an open standard for connecting AI models to external tools, data, and services. Uses JSON-RPC 2.0 with capability negotiation. Created by Anthropic.", tags:["MCP","AI"]},
  {t:"MCP Server", d:"A process that exposes tools, resources, and prompts via the Model Context Protocol. Communicates with MCP clients over stdio, SSE, or Streamable HTTP transport.", tags:["MCP"]},
  {t:"MCP Client", d:"A component that maintains a 1:1 connection with an MCP Server. Embedded in host applications like Claude Desktop, Claude Code, or IDE extensions.", tags:["MCP"]},
  {t:"JSON-RPC", d:"A stateless, lightweight remote procedure call protocol using JSON. MCP uses JSON-RPC 2.0 for all request/response and notification messages.", tags:["MCP","Protocol"]},
  {t:"OAuth 2.0", d:"An authorization framework (RFC 6749) using bearer tokens, scopes, and grant types. Requires HTTPS. Supports Authorization Code, Client Credentials, and Device Code flows.", tags:["Authentication","OAuth"]},
  {t:"OAuth 2.1", d:"The consolidated OAuth standard mandated by MCP. Requires PKCE for all clients, removes Implicit and Password grants, enforces refresh token rotation and exact redirect URI matching.", tags:["Authentication","OAuth","MCP"]},
  {t:"OAuth 1.0a", d:"The original OAuth protocol (RFC 5849) using HMAC-SHA1 signatures per request. Secure without HTTPS but complex to implement. Deprecated in favor of OAuth 2.0.", tags:["Authentication","OAuth"]},
  {t:"PKCE", d:"Proof Key for Code Exchange (RFC 7636) — prevents authorization code interception. Client generates a random verifier, sends SHA256 challenge to /authorize, proves possession at /token.", tags:["Authentication","OAuth"]},
  {t:"OIDC", d:"OpenID Connect — an identity layer on top of OAuth 2.0. Adds ID Tokens (JWT) for authentication and a /userinfo endpoint. Used by Google, Microsoft, Okta, Auth0.", tags:["Authentication","SSO"]},
  {t:"SAML", d:"Security Assertion Markup Language 2.0 — an XML-based SSO protocol where an Identity Provider sends signed assertions to a Service Provider. Dominant in enterprise environments.", tags:["Authentication","SSO"]},
  {t:"mTLS", d:"Mutual TLS — both client and server present X.509 certificates during TLS handshake. Provides transport-level authentication. Used in zero-trust networks and banking.", tags:["Authentication","Security"]},
  {t:"Bearer Token", d:"An access token where possession alone grants access. Sent via <code>Authorization: Bearer &lt;token&gt;</code> header. Must be protected by HTTPS since there is no proof of possession.", tags:["Authentication","OAuth"]},
  {t:"Refresh Token", d:"A long-lived token used to obtain new access tokens without re-authentication. Should be stored securely server-side. OAuth 2.1 requires rotation (one-time use).", tags:["Authentication","OAuth"]},
  {t:"JWT", d:"JSON Web Token — a compact, URL-safe token format with three base64url-encoded parts: header, payload, and signature. Used as ID Tokens in OIDC and access tokens in some OAuth flows.", tags:["Authentication"]},
  {t:"Streamable HTTP", d:"MCP's current standard HTTP transport. Single endpoint accepts POST requests, can respond with JSON or SSE streams. Supports session management via Mcp-Session-Id header.", tags:["MCP","Transport"]},
  {t:"Sampling", d:"An MCP capability where the server requests the AI model to generate text. Enables agentic behaviors while maintaining human-in-the-loop control via the client.", tags:["MCP","AI"]},
  {t:"Elicitation", d:"An MCP capability where the server asks the user for structured input. Client renders a form based on JSON Schema. Results can be accepted, declined, or cancelled.", tags:["MCP"]},
  {t:"DPoP", d:"Demonstration of Proof-of-Possession (RFC 9449) — an OAuth extension where the client proves it holds a private key when using a token. Prevents token replay and theft.", tags:["Authentication","OAuth"]},
  {t:"PAT", d:"Personal Access Token — a long-lived bearer token scoped to a user account. Used by GitHub, GitLab, Jira, and Confluence for API access instead of passwords.", tags:["Authentication"]},
  {t:"Kerberos", d:"A ticket-based network authentication protocol using a Key Distribution Center (KDC). Powers Active Directory. No passwords sent over the network — uses symmetric key cryptography.", tags:["Authentication","Enterprise"]},
  {t:"WebAuthn", d:"Web Authentication API (W3C/FIDO2) — public-key authentication using hardware security keys or biometrics. Phishing-resistant. Basis for Passkeys.", tags:["Authentication","Security"]},
  {t:"Passkey", d:"A FIDO2/WebAuthn credential synced across devices via iCloud Keychain, Google Password Manager, or 1Password. Replaces passwords with public-key cryptography and biometric verification.", tags:["Authentication","Security"]},
  {t:"TOTP", d:"Time-based One-Time Password (RFC 6238) — generates 6-digit codes from a shared secret and current time. Used by authenticator apps (Google Authenticator, Authy). Rotates every 30 seconds.", tags:["Authentication","MFA"]},
  {t:"Magic Link", d:"A passwordless authentication method where a one-time login URL is sent via email. User clicks the link to authenticate. Used by Slack, Notion, and Vercel.", tags:["Authentication"]},
  {t:"Evidence Bundle", d:"A structured, schema-validated artifact passed between agents in a factory. Contains every input and decision the next agent needs, so the handoff is auditable and machine-checkable.", tags:["Agents","Evals"]},
  {t:"Escape Class", d:"A severity taxonomy (E0–E3) for failures that slipped past every gate. E0 is a production incident; E3 is a human reviewer catching something the Red-Team agent signed off on — the most valuable signal for calibration.", tags:["Agents","Evals"]},
  {t:"Calibration Loop", d:"The weekly cycle that turns each new escape into a permanent control — a new eval case, a prompt rule, or a deterministic gate. The mechanism that makes the factory's escape rate trend down over time.", tags:["Agents","Evals"]},
  {t:"Red-Team Agent", d:"An adversarial review agent run on a different model (e.g. Gemini when the Developer uses Claude) to provide cross-model diversity. Hunts spec gaps, plausible-but-wrong code, and security issues.", tags:["Agents","Evals"]},
  {t:"Eval Harness", d:"A reproducible runner that executes an agent prompt against a versioned gold set of cases, scores each output, and reports per-case deltas vs a baseline. The regression benchmark for prompt changes.", tags:["Agents","Evals","Prompts"]},
  {t:"Prompts-as-Code", d:"Treating LLM system prompts the same as source code: versioned in git, reviewed via PR, tested against eval sets in CI, and never edited in a playground. Non-negotiable for production agent systems.", tags:["Agents","Prompts"]},
  {t:"Deterministic Gate", d:"A check whose output is the same for the same input — type checker, unit test, JSON schema, lint rule. Binary pass/fail. Used wherever a non-negotiable rule can be expressed without an LLM.", tags:["Agents","Evals"]},
  {t:"Gold Set", d:"A versioned collection of eval cases with expected outputs or scoring rubrics. Every new failure ticket is added; cases are never pruned just because they're 'solved'. The regression baseline.", tags:["Evals"]},
  {t:"AgentCore Runtime", d:"AWS Bedrock service that hosts AI agents on isolated Firecracker microVMs. Supports sessions up to 8 hours, framework- and model-agnostic, billed by vCPU-seconds and memory-seconds.", tags:["AWS","Bedrock","Agents"]},
  {t:"AgentCore Memory", d:"Managed short-term and long-term memory for agents. Short-term holds raw session turns; long-term extracts facts, summaries, and preferences into namespaces, retrievable by semantic search.", tags:["AWS","Bedrock","Agents"]},
  {t:"AgentCore Identity", d:"Auth layer for AWS Bedrock AgentCore. Handles inbound JWT/OAuth from users and outbound 3LO/2LO tokens to third-party APIs, with an encrypted vault for refresh tokens.", tags:["AWS","Bedrock","Agents"]},
  {t:"AgentCore Gateway", d:"Single MCP-speaking endpoint that turns OpenAPI specs, Lambda functions, and existing MCP servers into agent-discoverable tools, enforcing IAM and OAuth on every call.", tags:["AWS","Bedrock","MCP"]},
  {t:"AgentCore Code Interpreter", d:"Sandboxed Python/JS/TS execution in an isolated microVM, used by agents to do reliable arithmetic, data analysis, and untrusted-code execution without network egress.", tags:["AWS","Bedrock","Agents"]},
  {t:"AgentCore Browser", d:"Managed Chromium in a microVM, controllable via the Chrome DevTools Protocol (compatible with Playwright/Puppeteer), used by agents for form-fill, scraping, and end-to-end web tasks.", tags:["AWS","Bedrock","Agents"]},
  {t:"3LO / 2LO", d:"OAuth flow shorthand. Three-legged (3LO) involves a user consenting so the agent can act on their behalf; two-legged (2LO) is the agent's own machine identity. AgentCore Identity handles both.", tags:["AWS","Bedrock","OAuth"]},
  {t:"Strands Agents", d:"AWS-native open-source agent framework, designed to run cleanly on AgentCore Runtime. Alternative to LangGraph and CrewAI; AgentCore is framework-agnostic.", tags:["AWS","Bedrock","Agents"]},
  {t:"Droid", d:"A Factory.ai autonomous agent purpose-built for one role in the SDLC (Code, Knowledge, Review, Spec, Incident, Ticket). Each Droid has explicit scope, tools, and guardrails rather than being a generalist.", tags:["Factory.ai","AI Agents"]},
  {t:"Mission (Factory.ai)", d:"A long-running, multi-step delegated outcome (e.g. a service migration) that Factory.ai plans, executes, and verifies across hours or days using multiple Droids coordinated by a planner.", tags:["Factory.ai","AI Agents"]},
  {t:"Code Droid", d:"Factory.ai's main engineering Droid. Handles feature development, refactors, bug fixes, and migrations end-to-end &mdash; cloning the repo, editing files, adding tests, and opening a PR.", tags:["Factory.ai","AI Agents"]},
  {t:"Knowledge Droid", d:"Factory.ai's research Droid. Searches your codebase, internal docs, and the web to answer architectural questions, write specs, and document legacy systems with cited sources.", tags:["Factory.ai","AI Agents"]},
  {t:"Coordinator (Factory.ai)", d:"The planning agent in Factory.ai's multi-agent architecture. Decomposes a goal into steps and dispatches each step to the specialist Droid best suited for it.", tags:["Factory.ai","AI Agents"]},
  {t:"Autonomy Level", d:"A Factory.ai control that scopes how much a Droid can do unattended &mdash; Suggest, Confirm, Auto, or Gated. Teams typically start at Suggest and promote as trust grows.", tags:["Factory.ai","AI Agents"]},
  {t:"Organizational Memory", d:"Factory.ai's persistent store of decisions, runbooks, conventions, and architecture maps captured from past missions, so every Droid starts with the same context as a senior teammate.", tags:["Factory.ai","AI Agents"]},
  {t:"Copilot Studio", d:"Microsoft's low-code platform for building custom copilots/agents that ground on M365 data, call connectors and MCP tools, and publish to Teams, Microsoft 365 Copilot, web, and voice channels.", tags:["Microsoft 365","Copilot Studio","AI Agents"]},
  {t:"Agent 365", d:"Microsoft's control plane for managing agents across the tenant. Provides registry, security, observability, optimization, and lifecycle for agents built in Copilot Studio, Azure AI Foundry, or third-party platforms.", tags:["Microsoft 365","Agent 365","Governance"]},
  {t:"Entra Agent ID", d:"A first-class identity in Microsoft Entra issued to every agent. Carries Conditional Access, MFA, audit, and group-based authorization just like a human user identity.", tags:["Microsoft 365","Entra","Identity"]},
  {t:"Topic (Copilot Studio)", d:"An authored conversation flow in Copilot Studio with a trigger, nodes, and slots that handles a specific user intent end-to-end. Used when deterministic behavior is required.", tags:["Copilot Studio","AI Agents"]},
  {t:"Generative Answers", d:"A Copilot Studio node that grounds an LLM response on indexed knowledge sources (SharePoint, files, websites, Dataverse) with citations. The default fallback when no topic matches.", tags:["Copilot Studio","RAG"]},
  {t:"Action (Copilot Studio)", d:"Something a Copilot Studio agent can do &mdash; a connector call, Power Automate flow, REST/OpenAPI endpoint, MCP tool, or reusable prompt. The orchestrator picks which action to invoke per turn.", tags:["Copilot Studio","AI Agents"]},
  {t:"Power Automate Flow", d:"A multi-step automation built in Power Automate. Copilot Studio agents call flows as single actions to chain connector calls, conditions, and approvals.", tags:["Microsoft 365","Power Platform"]},
  {t:"Copilot Studio Message", d:"The billing unit for Copilot Studio. Generative answers, autonomous actions, connector calls, and code interpreter runs each consume messages. Sold as prepaid packs or pay-as-you-go via Azure.", tags:["Copilot Studio","Pricing"]},
  {t:"Managed Environment", d:"A Power Platform / Copilot Studio environment with extra governance gates &mdash; solution checker, approval workflows, sharing limits &mdash; used for production agents.", tags:["Microsoft 365","Governance"]},
  {t:"DLP Policy (Microsoft)", d:"Data Loss Prevention policy that classifies connectors into Business, Non-Business, or Blocked groups. Copilot Studio agents cannot mix connectors across groups, preventing data exfiltration.", tags:["Microsoft 365","Security","Governance"]},
  {t:"Clerk", d:"An authentication and user management platform that ships prebuilt UI components, a managed user store, sessions, and B2B Organizations. Handles passwords, OAuth, MFA, passkeys, and JWTs so apps don't build auth from scratch.", tags:["Authentication","Identity"]},
  {t:"ClerkProvider", d:"The React context provider that wraps a Clerk-powered app, supplying the publishable key and making auth state, hooks, and components like <code>&lt;UserButton /&gt;</code> available throughout the tree.", tags:["Authentication","Identity"]},
  {t:"Publishable Key", d:"A Clerk key (prefixed <code>pk_</code>) that is safe to expose in the browser; it identifies the frontend instance. Paired with a secret key (<code>sk_</code>) that stays on the server.", tags:["Authentication","Security"]},
  {t:"Session Token (Clerk)", d:"A short-lived JWT (default ~60 seconds) Clerk issues per session and stores in a cookie, auto-refreshed by the SDK. Backends verify it statelessly to authenticate requests without a database lookup.", tags:["Authentication","Sessions"]},
  {t:"JWT Template", d:"A Clerk configuration that shapes the custom claims in a session token so third parties like Supabase, Hasura, or Firebase trust Clerk-issued JWTs. Fetched via <code>getToken({template})</code>.", tags:["Authentication","Sessions"]},
  {t:"Organization (Clerk)", d:"A Clerk entity modeling a team, company, or workspace for multi-tenant B2B apps. Users join organizations via memberships with roles; the active org rides in the session JWT as <code>orgId</code>.", tags:["B2B SaaS","Identity"]},
  {t:"Clerk RBAC", d:"Role-based access control in Clerk Organizations. Roles (e.g. <code>org:admin</code>) hold granular permissions (e.g. <code>org:invoices:create</code>), checked on client and server via <code>has()</code> or <code>&lt;Protect&gt;</code>.", tags:["B2B SaaS","Security"]},
  {t:"Enterprise SSO (Clerk)", d:"Clerk Enterprise Connections that let an organization's members sign in through their company IdP (Okta, Entra ID, Google Workspace) over SAML or OIDC, often paired with SCIM provisioning.", tags:["B2B SaaS","SSO"]},
  {t:"Passkey", d:"A phishing-resistant WebAuthn credential bound to a device's biometrics or a hardware key. Clerk supports passkeys as a primary or second authentication factor via <code>user.createPasskey()</code>.", tags:["Authentication","Security"]},
  {t:"publicMetadata", d:"A Clerk metadata bucket on users and organizations that is readable on the frontend but writable only from the backend. Commonly promoted into session claims for instant, API-free authorization checks.", tags:["Authentication","Identity"]},
  {t:"Expo", d:"An open-source framework and platform for building universal React Native apps for iOS, Android, and web. Bundles the Expo SDK, Expo CLI, and the EAS cloud services for builds, submissions, and updates.", tags:["React Native","Mobile"]},
  {t:"EAS (Expo Application Services)", d:"Expo's cloud services for the app lifecycle: EAS Build (cloud iOS/Android builds), EAS Submit (store submission), and EAS Update (over-the-air JS/asset updates).", tags:["Mobile","Cross-Platform"]},
  {t:"EAS Update", d:"Expo's over-the-air update service that ships new JavaScript and asset bundles to installed apps without a full store release, organized by branches and channels. Cannot change native code.", tags:["Mobile","React Native"]},
  {t:"Expo Router", d:"Expo's file-based routing library for React Native and web, where files in the <code>app</code> directory become routes with shared layouts, typed routes, and deep linking built in.", tags:["React Native","Mobile"]},
  {t:"Config Plugin", d:"An Expo mechanism that lets you customize native iOS/Android project configuration from JavaScript during <code>prebuild</code>, so managed apps can add native capabilities without manually editing native code.", tags:["Mobile","React Native"]},
  {t:"Development Build", d:"A custom build of an Expo app that includes the Expo Dev Client and your own native modules, used instead of the generic Expo Go app when a project needs custom native code.", tags:["Mobile","React Native"]},
  {t:"Sentry", d:"An application monitoring platform for error and exception tracking, performance tracing, session replay, profiling, and logs. Available as a SaaS and self-hosted; SDKs cover most languages and frameworks.", tags:["Error Tracking","Observability"]},
  {t:"DSN (Data Source Name)", d:"The client key a Sentry SDK uses to know which project to send events to. Safe to ship in clients; it identifies but does not grant account access.", tags:["Error Tracking","Observability"]},
  {t:"Breadcrumbs", d:"A trail of events (navigation, network calls, log lines, clicks) that a Sentry SDK records leading up to an error, giving context for how a user reached the failure.", tags:["Error Tracking","Observability"]},
  {t:"Source Maps", d:"Files that map minified production JavaScript back to original source so Sentry can show readable stack traces. Uploaded via bundler plugins or sentry-cli and tied to a release.", tags:["Error Tracking","Observability"]},
  {t:"Distributed Tracing", d:"Following a single request across multiple services by propagating a trace context, so Sentry can connect frontend, backend, and downstream spans into one end-to-end trace.", tags:["Observability","Performance"]},
  {t:"Session Replay", d:"A Sentry feature that reconstructs a video-like DOM replay of a user's session around an error, with privacy masking and sampling to control volume and protect PII.", tags:["Error Tracking","Observability"]},
  {t:"ClickHouse", d:"An open-source, column-oriented OLAP database built for real-time analytics on very large datasets, using vectorized execution and heavy compression for fast aggregate queries.", tags:["OLAP","Database"]},
  {t:"Columnar Storage", d:"Storing each column's values together rather than each row's, so analytic queries read only needed columns and compress similar values well. The basis of ClickHouse's speed for OLAP workloads.", tags:["OLAP","Analytics"]},
  {t:"MergeTree", d:"ClickHouse's primary table engine family. Data is written as immutable parts that are merged in the background, with a sparse primary index over a sorting key (<code>ORDER BY</code>) and optional partitioning.", tags:["OLAP","Database"]},
  {t:"Materialized View (ClickHouse)", d:"A ClickHouse object that runs a query on each insert into a source table and writes the result to a target table, enabling incremental pre-aggregation, often over an AggregatingMergeTree.", tags:["OLAP","Analytics"]},
  {t:"Sparse Primary Index", d:"ClickHouse indexes one entry per granule (block of rows) rather than per row, keeping the index tiny and in memory; queries use it to skip granules that can't match the filter.", tags:["OLAP","Database"]},
  {t:"LowCardinality", d:"A ClickHouse data type wrapper that dictionary-encodes columns with few distinct values (e.g. statuses, country codes), shrinking storage and speeding up filtering and grouping.", tags:["OLAP","Database"]},
  {t:"MVCC", d:"Multi-Version Concurrency Control — PostgreSQL keeps multiple row versions so readers never block writers and vice versa. Each tuple carries <code>xmin</code>/<code>xmax</code> transaction IDs and visibility is decided per snapshot.", tags:["PostgreSQL","Internals"]},
  {t:"VACUUM", d:"The PostgreSQL maintenance process that reclaims space from dead tuples left by MVCC, updates the visibility map, and freezes old rows. Usually run automatically by autovacuum; <code>VACUUM FULL</code> rewrites a table to remove bloat.", tags:["PostgreSQL","Performance"]},
  {t:"Table Bloat", d:"Wasted space in PostgreSQL tables and indexes from dead tuples that VACUUM hasn't reclaimed. Excessive bloat slows scans and inflates storage; monitored via catalog/stat views and fixed with VACUUM or REINDEX.", tags:["PostgreSQL","Performance"]},
  {t:"TOAST", d:"The Oversized-Attribute Storage Technique — PostgreSQL transparently compresses and/or moves large field values (over ~2KB) into a side table so main heap pages stay compact.", tags:["PostgreSQL","Internals"]},
  {t:"WAL (Write-Ahead Log)", d:"PostgreSQL's append-only log of changes written before data pages, providing crash durability and feeding replication. Checkpoints flush dirty pages and bound recovery time.", tags:["PostgreSQL","Internals"]},
  {t:"Query Planner", d:"PostgreSQL's cost-based optimizer that uses table statistics to choose scan types, join algorithms, and join order. Inspect its choices with <code>EXPLAIN (ANALYZE, BUFFERS)</code>.", tags:["PostgreSQL","Performance"]},
  {t:"BRIN Index", d:"Block Range INdex — a tiny PostgreSQL index that stores min/max summaries per block range, ideal for huge tables with naturally ordered columns (e.g. timestamps) where a B-tree would be too large.", tags:["PostgreSQL","Performance"]},
  {t:"XID Wraparound", d:"PostgreSQL transaction IDs are 32-bit and wrap after ~2 billion; rows must be frozen by vacuum before that horizon or the database forces a shutdown to protect data. A key thing autovacuum guards against.", tags:["PostgreSQL","Internals"]},
  {t:"pg_stat_statements", d:"A PostgreSQL extension that aggregates execution statistics per normalized query — calls, total/mean time, rows, buffer usage — the standard starting point for finding slow queries.", tags:["PostgreSQL","Performance"]},
  {t:"Metabase", d:"An open-source business intelligence tool for self-service analytics: ask questions with a no-code query builder or SQL, build dashboards, and share insights. Available as Metabase Cloud or self-hosted.", tags:["BI","Analytics"]},
  {t:"Metabase Query Builder", d:"Metabase's no-code \"notebook\" editor for building questions visually — filtering, summarizing, grouping, and joining data without writing SQL.", tags:["BI","Analytics"]},
  {t:"Metabase Model", d:"A curated, reusable dataset in Metabase built on a question or SQL, with cleaned-up metadata and semantic types, that serves as a trusted starting point for others' questions.", tags:["BI","Dashboards"]},
  {t:"Field Filter", d:"A Metabase SQL variable type that maps a parameter directly to a database column, enabling smart dashboard filters (dropdowns, date pickers) and optional <code>WHERE</code> clauses in native queries.", tags:["BI","Analytics"]},
  {t:"Data Sandboxing", d:"A Metabase (Pro/Enterprise) row- and column-level security feature that restricts what data a user group sees, enabling multi-tenant and customer-facing analytics from shared questions.", tags:["BI","Dashboards"]},
  {t:"Shard", d:"A horizontal partition of an OpenSearch Index, implemented as a self-contained Lucene index. A primary shard holds the original data; replica shards are copies for high availability and read scaling.", tags:["Search","Analytics"]},
  {t:"Mapping", d:"The schema of an OpenSearch Index, defining each field's type and how it is analyzed. The choice of <code>text</code> (tokenized for full-text search) vs <code>keyword</code> (exact value for filters and aggregations) is the most important mapping decision.", tags:["Search"]},
  {t:"Query DSL", d:"OpenSearch's JSON-based query language. Combines leaf queries (<code>match</code>, <code>term</code>, <code>range</code>) with compound queries like <code>bool</code>, distinguishing scored query context from cached filter context.", tags:["Search"]},
  {t:"Aggregation", d:"An OpenSearch framework for analytics over search results. Bucket aggregations group documents, metric aggregations compute values (sum, avg), and pipeline aggregations operate on other aggregations' output.", tags:["Search","Analytics"]},
  {t:"BM25", d:"The default relevance-ranking function in OpenSearch and Lucene. Scores documents using term frequency (TF), inverse document frequency (IDF), and field-length normalization to order full-text search results.", tags:["Search"]},
  {t:"ISM", d:"Index State Management &mdash; an OpenSearch plugin that automates the index lifecycle through states, actions, and transitions (e.g. rollover, force-merge, snapshot, delete), commonly paired with Data Streams for time-series data.", tags:["Search","Analytics"]},
  {t:"k-NN", d:"k-Nearest-Neighbor vector search in OpenSearch. Stores embeddings in a <code>knn_vector</code> field and runs approximate search over HNSW graphs (Lucene/Faiss/nmslib), powering semantic search, hybrid ranking, and RAG.", tags:["Search","Vector Search"]},
  {t:"Vite", d:"The de-facto frontend build tool. Serves source as native ESM in development (near-instant startup, fast HMR) and produces optimized production bundles.", tags:["Vite","React"]},
  {t:"HMR", d:"Hot Module Replacement — swapping an edited module into a running app without a full page reload, preserving component state. Provided by modern dev servers and bundlers such as Vite, webpack, and Metro.", tags:["Vite","React"]},
  {t:"Hydration", d:"Attaching a framework's event listeners and state to server-rendered HTML so a static page becomes interactive. Happens after the client bundle loads; mismatches between server and client output cause hydration errors.", tags:["React","Next.js"]},
  {t:"SSR", d:"Server-Side Rendering — generating a page's HTML on the server per request, giving fast first paint and SEO. Contrast with CSR (render in the browser), SSG (render at build time), and ISR.", tags:["Next.js","React"]},
  {t:"ISR", d:"Incremental Static Regeneration — a Next.js strategy where static pages are rebuilt in the background after a revalidation interval or on demand, combining static speed with fresh content.", tags:["Next.js"]},
  {t:"Server Action", d:"A Next.js/React function marked with the <code>\"use server\"</code> directive that runs on the server but can be called from client code or a form's <code>action</code> attribute — the built-in way to handle mutations without writing API endpoints.", tags:["Next.js","React"]},
  {t:"App Router", d:"Next.js's routing system built on React Server Components. Folders under <code>app/</code> become URLs, with special files — <code>page.tsx</code>, <code>layout.tsx</code>, <code>loading.tsx</code>, <code>error.tsx</code>, <code>route.ts</code> — defining each segment's UI and API.", tags:["Next.js"]},
  {t:"tRPC", d:"A TypeScript library for end-to-end typesafe APIs: the client infers input and output types directly from server procedure definitions, with no code generation or schema files.", tags:["Next.js","TypeScript","Full-Stack"]},
  {t:"Storybook", d:"An open-source frontend workshop that renders UI components in isolation. Each component state is written as a Story, and those same stories drive the sandbox, the documentation, interaction tests, accessibility checks, and visual snapshots.", tags:["UI","Testing","Design Systems"]},
  {t:"Story", d:"A single rendered state of a UI component in Storybook, written as a named export from a <code>*.stories.*</code> file. A story captures the props (Args) needed to reach that state — loading, error, empty, or happy path.", tags:["UI","Design Systems"]},
  {t:"CSF (Component Story Format)", d:"Storybook's ES-module story syntax: the default export is the <code>meta</code> object describing the component, and each named export is a Story. CSF 3 is the current standard; CSF Factories (<code>preview.meta()</code> / <code>meta.story()</code>) is a typesafe successor in preview for React as of Storybook 10.", tags:["UI","Design Systems"]},
  {t:"Args", d:"The inputs (props) that define a Storybook Story. Args merge across three levels — project, component <code>meta</code>, and story — and power the Controls panel, where anyone can edit them live without touching code.", tags:["UI","Design Systems"]},
  {t:"ArgTypes", d:"Per-arg metadata in Storybook that describes an argument's type, description, and which Control renders it. Usually inferred from TypeScript types or PropTypes, and overridden only to refine the control or the generated docs table.", tags:["UI","Design Systems"]},
  {t:"Storybook Decorator", d:"A function that wraps a Story with extra markup or context — a theme provider, router, query client, or layout padding. Decorators apply at story, component, or project level, wrapping outermost to innermost.", tags:["UI","Design Systems"]},
  {t:"Play Function", d:"An async function attached to a Storybook Story that runs after render, driving the component with simulated user events and asserting the outcome. It turns a story into an interaction test that also replays step by step in the UI.", tags:["UI","Testing"]},
  {t:"Autodocs", d:"Storybook's generated documentation page for a component, enabled with the <code>autodocs</code> tag. Combines the component description, a props table derived from types, and a live preview of every Story — so docs cannot drift from the code.", tags:["UI","Design Systems"]},
  {t:"Storybook Composition", d:"Referencing other published Storybooks from one instance via <code>refs</code> in <code>main.ts</code>, so several independently versioned and deployed Storybooks appear in a single sidebar.", tags:["UI","Design Systems"]},
  {t:"Chromatic", d:"A cloud service from the Storybook maintainers that snapshots every Story across browsers and viewports, diffs each build against an accepted baseline, and posts visual review results back to the Pull Request (PR).", tags:["UI","Testing"]},
  {t:"Visual Regression Testing", d:"Comparing rendered screenshots against approved baselines to catch unintended appearance changes — spacing, color, and layout drift that behavioral tests pass straight through. Tools include Chromatic, Playwright screenshots, Percy, and BackstopJS.", tags:["Testing","UI"]},
  {t:"axe-core", d:"The open-source accessibility engine behind Storybook's a11y addon and most automated a11y tooling. Checks rendered DOM for contrast, ARIA misuse, missing labels, and focus-order problems — catching the mechanical subset of issues on every run.", tags:["Testing","Accessibility","UI"]},
  {t:"MSW (Mock Service Worker)", d:"An API mocking library that intercepts <code>fetch</code> and XHR at the network layer using a Service Worker, so components run against realistic responses without a backend. Commonly paired with Storybook to make network-dependent stories deterministic.", tags:["Testing","UI"]},
  {t:"Portable Stories", d:"Reusing Storybook stories as test fixtures outside Storybook — with their args, decorators, and play functions intact — so the same definitions run in Vitest, Jest, or Playwright instead of being duplicated in test files.", tags:["Testing","UI"]},
  {t:"Wazuh", d:"A free, open-source SIEM and XDR platform forked from OSSEC. Four components: an agent on each endpoint, a server that decodes and rules on the data, an indexer (an OpenSearch fork) that stores alerts, and a dashboard for hunting. Unlimited ingest with no per-GB licence.", tags:["Wazuh","SIEM","Security"]},
  {t:"OSSEC", d:"The open-source host-based intrusion detection system Wazuh forked from in 2015. Still the origin of much of Wazuh's layout — the install path <code>/var/ossec/</code> and the <code>ossec.conf</code> config file both come from it.", tags:["Wazuh","Security"]},
  {t:"XDR", d:"Extended Detection and Response — goes beyond a SIEM's log analysis to watch the endpoint itself (files, processes, configuration) and act on what it finds. Wazuh combines SIEM and XDR in one platform; compare EDR, which is endpoint-only.", tags:["Security","Wazuh","SIEM"]},
  {t:"Decoder", d:"In Wazuh, the component that extracts named fields (source IP, username, port) from a raw log line so rules have something structured to match on. Test one with <code>wazuh-logtest</code>; custom ones go in <code>local_decoder.xml</code>.", tags:["Wazuh","SIEM"]},
  {t:"Rule Level", d:"Wazuh's 0–16 severity scale attached to every rule. 0 means ignore entirely, 3 is a normal authorised event, 10 is repeated errors from one source, 12+ is high importance, and 15 signals a severe attack. The manager stores level 3 and above by default.", tags:["Wazuh","SIEM"]},
  {t:"FIM", d:"File Integrity Monitoring — watches files and registry keys for creation, modification, and deletion by comparing hashes and attributes. Wazuh's <code>syscheck</code> module; <code>realtime</code> uses inotify and <code>whodata</code> hooks auditd to record who made the change.", tags:["Wazuh","Security"]},
  {t:"SCA", d:"Security Configuration Assessment — checks each endpoint against a hardening policy such as a CIS benchmark and reports pass/fail per control with remediation notes. Runs on the Wazuh agent on a schedule, so no separate scanner is needed.", tags:["Wazuh","Security"]},
  {t:"Active Response", d:"Wazuh's mechanism for acting on an alert rather than just recording it — blocking a source IP with <code>firewall-drop</code>, locking an account, or running a custom script. Always pair it with a timeout and an allowlist, since a false positive becomes an outage.", tags:["Wazuh","Security"]},
  {t:"MITRE ATT&CK", d:"A public catalogue of real-world adversary tactics and techniques, each with a T-number (e.g. T1110 Brute Force). Detection rules are tagged with technique IDs so you can see both what you have detected and which techniques you have no coverage for.", tags:["Security","Wazuh","SIEM"]},
  {t:"Work OS", d:"monday.com's positioning for a platform where non-developers assemble their own software from one shared data model — boards, items, and typed columns — rather than buying a separate tool per team. The four products (Work Management, CRM, dev, service) are all built on it.", tags:["Work OS","No-Code"]},
  {t:"Board", d:"The core building block of monday.com — effectively a typed table. A board holds Groups (sections), Items (rows), and Columns (typed fields), and every View, Dashboard, and Automation reads from or reacts to one.", tags:["Work OS","No-Code"]},
  {t:"Item", d:"A single row on a monday.com Board — a task, deal, ticket, or candidate. Each item carries its own Updates thread and can expand into one level of subitems.", tags:["Work OS","No-Code"]},
  {t:"Connect Boards", d:"The monday.com column that links items on one Board to items on another — the platform's foreign key. It stops the same client or project name being retyped across boards, and is the prerequisite for a Mirror Column.", tags:["Work OS","No-Code"]},
  {t:"Mirror Column", d:"A read-only monday.com column that displays a column from a linked item, layered on top of a Connect Boards column. Numeric mirrors can sum or average across many linked items, which is how project-level rollups stay current without manual updates.", tags:["Work OS","No-Code"]},
  {t:"Recipe", d:"monday.com's unit of automation — a fill-in-the-blanks sentence of trigger, optional conditions, and one or more actions. Integrations are recipes whose trigger or action lives in a third-party product.", tags:["Automation","Work OS"]},
  {t:"Action Limit", d:"The monthly quota of automation and integration actions on a monday.com account, set by plan tier and refreshed monthly. Custom templates that mix automation and integration blocks count entirely against the automation limit, as do actions consumed by monday apps.", tags:["Automation","Work OS"]},
  {t:"AI Block", d:"An AI step dropped into a monday.com workflow between the trigger and the action — classifying text, extracting fields, or summarising a thread. The workflow engine stays in control; constrain the block's output to a fixed label set rather than free text.", tags:["Automation","AI"]},
  {t:"mondayDB", d:"The purpose-built data engine underneath monday.com. Schemaless, with data held in both row and columnar stores so queries route to whichever fits, and storage separated from compute. Version 3.0 added a DuckDB columnar engine, pushing viable board size from roughly 100K items into the millions.", tags:["Work OS","Database"]},
  {t:"Complexity Points", d:"How the monday.com GraphQL API meters load — a deeply nested query can be expensive even as a single request. Add the <code>complexity { query before after }</code> field to any operation to measure its cost, then reduce it by requesting fewer fields, flattening nesting, and paginating with <code>items_page</code>.", tags:["GraphQL API","Work OS"]},
  {t:"Ideal Customer Profile (ICP)", d:"A specific description of the accounts or people who get disproportionate value from a product, built from firmographic, behavioral, and needs-based traits. Should be anchored in retention and expansion data, not just who closed.", tags:["Marketing"]},
  {t:"Voice of Customer (VoC)", d:"The aggregated, mined language customers actually use — in reviews, support tickets, sales calls, and social posts — surfaced to find pain points, purchase barriers, and emerging needs rather than assumed ones.", tags:["Marketing"]},
  {t:"Opportunity Space", d:"An underserved need at the intersection of a customer segment and a market gap, typically surfaced by clustering research data (search, reviews, support) that no single manual read would catch.", tags:["Marketing"]},
  {t:"Content Gap Analysis", d:"Comparing the intents an Ideal Customer Profile (ICP) has against the content a team and its competitors already publish, to find topics with real demand and no strong answer.", tags:["Marketing"]},
  {t:"Topic Cluster", d:"A pillar theme and the group of related queries, pain points, and subtopics that sit under it — the organizing unit between raw research and an editorial calendar.", tags:["Marketing"]},
  {t:"Content Brief", d:"The written spec behind an AI-generated content piece — audience, pain point, proof points, and tone — sourced from research rather than a one-line prompt. The main defense against generic AI output.", tags:["Marketing","AI"]},
  {t:"Hyper-Personalization", d:"Content, offer, and sequencing built to a segment's specific pain point and stage, ranging from cheap segment-level variants to expensive true 1:1 dynamic content — distinct from a first-name merge tag on an otherwise generic message.", tags:["Marketing"]},
  {t:"Demand Capture vs. Demand Creation", d:"Two content jobs: demand capture wins buyers who already know the category (comparisons, bottom-funnel case studies); demand creation builds the category for buyers who don't yet know they have the problem.", tags:["Marketing"]},
  {t:"Vanity Metric", d:"A number — pageviews, follower counts, pieces published — that moves without tracing back to a business outcome like pipeline, retention, or expansion. Contrasted with a value-based content metric.", tags:["Marketing"]},
  {t:"Performance Max (PMax)", d:"A goal-based Google Ads campaign type that bids toward one conversion goal across every Google surface — Search, Display, YouTube, Gmail, Maps, Discover — from a single set of asset groups and audience signals, letting AI decide the surface and creative mix per auction.", tags:["Marketing","Google Ads","AI"]},
  {t:"Smart Bidding", d:"Google Ads' machine-learning bid strategies (Target CPA, Target ROAS, Maximize Conversions) that set a bid per auction using real-time signals, rather than a marketer setting static bids per keyword.", tags:["Marketing","Google Ads","AI"]},
  {t:"App Store Optimization (ASO)", d:"Optimizing an app's store listing — title, keywords, icon, screenshots, ratings — to improve its conversion rate from listing view to install and its ranking in App Store and Google Play search.", tags:["Marketing","Mobile"]},
  {t:"Deferred Deep Link", d:"A deep link that survives an app install: a user without the app is routed through the store, and on first launch still lands on the specific in-app screen the original ad or link promised.", tags:["Marketing","Mobile"]},
  {t:"Mobile Measurement Partner (MMP)", d:"A third-party attribution layer (e.g. AppsFlyer, Adjust, Branch) sitting between ad networks and an app that deduplicates install and event credit across channels, used to cross-check what Self-Reporting Networks report about their own performance.", tags:["Marketing","Mobile","Attribution"]},
  {t:"Self-Reporting Network (SRN)", d:"A large ad platform (Google, Meta, TikTok) that attributes and reports its own campaign performance — graded against Mobile Measurement Partner data for consistency rather than treated as ground truth on its own.", tags:["Marketing","Mobile","Attribution"]},
  {t:"Multi-Touch Attribution", d:"A model that splits conversion credit across every observed touchpoint in a user's path (linear, position-based, time-decay, or data-driven), instead of giving all credit to the last click — accurate only as far as the underlying paths can actually be observed.", tags:["Marketing","Attribution"]},
  {t:"Activation", d:"The point at which a new user reaches a defined moment of value in a product — the metric that predicts retention far better than install or signup counts alone.", tags:["Marketing","Mobile"]},
  {t:"LTV / ROAS", d:"Lifetime Value predicts what a user cohort is worth over time; Return on Ad Spend compares that value against acquisition cost. Together they decide whether a campaign should scale, where cost-per-install alone cannot.", tags:["Marketing","Mobile"]},
  {t:"Advantage+ Shopping Campaign (ASC)", d:"Meta's AI-driven campaign type for e-commerce that automates audience targeting, placement, budget allocation, and creative combination testing from a single campaign structure, replacing the older model of manually-split ad sets per audience.", tags:["Marketing","Meta Ads","AI"]},
  {t:"Custom Audience", d:"A Meta ad audience built directly from a business's own data &mdash; website visitors via the Meta Pixel, customer lists uploaded from a CRM, app activity, or engagement with Facebook/Instagram content &mdash; used for remarketing or as the seed for a Lookalike Audience.", tags:["Marketing","Meta Ads"]},
  {t:"Lookalike Audience", d:"A Meta audience algorithmically expanded from a source (seed) Custom Audience, finding new people who share the traits of a business's best existing customers at a chosen size/similarity tradeoff.", tags:["Marketing","Meta Ads","AI"]},
  {t:"Meta Pixel", d:"A JavaScript snippet placed on a website that reports visitor actions &mdash; page views, add-to-cart, purchase &mdash; back to Meta Ads Manager, feeding both campaign optimization and Custom Audience creation. Increasingly paired with the server-side Conversions API for events browser tracking misses.", tags:["Marketing","Meta Ads"]},
  {t:"Events Manager", d:"Meta's tool for managing ad data sources (Pixel, Conversions API, SDK), viewing event diagnostics, deduplicating overlapping signals, and monitoring Event Match Quality &mdash; the score used to catch and fix broken or incomplete event data before it degrades optimization.", tags:["Marketing","Meta Ads"]},
  {t:"Learning Phase", d:"The period after a Meta ad set is created or significantly edited during which delivery is unstable while the algorithm explores and gathers enough optimization events (roughly 50 per week) to exit learning and stabilize toward a consistent cost per result.", tags:["Marketing","Meta Ads","AI"]},
  {t:"Andromeda", d:"Meta's AI-powered ads retrieval system that uses deep neural embeddings and high-throughput vector search to evaluate a far larger pool of candidate ads per auction than earlier retrieval methods allowed, improving personalization at the earliest ranking stage.", tags:["Marketing","Meta Ads","AI"]},
  {t:"GEM (Generative Ads Model)", d:"Meta's generative ranking model that predicts ad performance from a unified foundation model instead of separate hand-tuned predictors for clicks, conversions, and value &mdash; part of the same ranking pipeline Andromeda feeds candidates into.", tags:["Marketing","Meta Ads","AI"]},
  {t:"Creative Fatigue", d:"The performance decline that sets in as an audience sees the same ad too many times &mdash; rising frequency, falling CTR, and climbing cost per result &mdash; addressed by refreshing creative, widening the audience, or capping frequency rather than raising bids.", tags:["Marketing","Meta Ads"]},
  {t:"Digital Twin / Synthetic Audience", d:"AI-generated personas that simulate how a defined audience segment would react to creative, used to pre-test messaging, hooks, and variants before committing real media budget &mdash; a directional signal to narrow options, not a replacement for live A/B testing.", tags:["Marketing","AI"]},
  {t:"GEO (Generative Engine Optimization)", d:"Optimizing content to be cited, quoted, or referenced inside AI-generated answers from tools like AI Overviews, ChatGPT Search, Perplexity, Claude, and Gemini &mdash; distinct from SEO's goal of ranking in a list a human scans and clicks.", tags:["Marketing","SEO","GEO"]},
  {t:"AEO (Answer-Engine Optimization)", d:"Structuring content &mdash; direct answers, Q&amp;A formatting, definition-style openings &mdash; so an answer engine can extract it cleanly into a synthesized response, whether that engine is a traditional featured snippet or an LLM-based assistant.", tags:["Marketing","SEO","GEO"]},
  {t:"llms.txt", d:"A proposed convention: a plain-Markdown file at a site's /llms.txt path that gives AI crawlers a concise, curated map of the site's most important content, since LLM context windows can't ingest an entire site the way a search index can. Adoption varies by crawler.", tags:["Marketing","SEO","GEO"]},
  {t:"E-E-A-T", d:"Experience, Expertise, Authoritativeness, and Trustworthiness &mdash; Google's framework for judging content quality. Not a direct ranking formula, but the underlying bar both classic ranking systems and AI answer engines approximate when selecting sources.", tags:["Marketing","SEO"]},
  {t:"Entity-Based Optimization", d:"Optimizing content around unambiguous entities &mdash; people, organizations, products, concepts &mdash; and their relationships, rather than exact-match keyword strings. LLMs reason over entities, so disambiguating them (via structured data or canonical links) improves how reliably a model places content in an answer.", tags:["Marketing","SEO","GEO"]},
  {t:"Core Web Vitals", d:"Google's page-experience metrics: LCP (loading speed), INP (interaction responsiveness), and CLS (visual stability). A confirmed ranking signal and a proxy for content quality that answer engines correlate with trustworthy sources.", tags:["Marketing","SEO"]},
  {t:"Topic Cluster", d:"A content architecture pattern: one broad pillar page linked to and from a set of narrower cluster pages that each go deep on one subtopic, signaling comprehensive topical coverage to both search rankers and AI answer engines.", tags:["Marketing","SEO"]},
  {t:"Buying Committee", d:"The group of stakeholders &mdash; champion, end user, economic buyer, and often others &mdash; who collectively decide a B2B purchase, each with different stakes and objections that a single generic pitch can't address.", tags:["Marketing","B2B"]},
  {t:"Thought Leader Ads", d:"A LinkedIn ad format that boosts an executive's own organic post to a targeted audience, combining paid reach with the trust signal of a personal-voice post instead of company-branded ad creative.", tags:["Marketing","LinkedIn","B2B"]},
  {t:"Employee Advocacy", d:"A structured program that makes it easy for employees to reshare and comment on company content from their own accounts, multiplying organic reach through personal networks the company page can't access directly.", tags:["Marketing","LinkedIn","B2B"]},
  {t:"Uncopiable-Voice Thesis", d:"The argument &mdash; made publicly by Freepik's Joaquin Cuenca Abela, among others &mdash; that as AI makes generic content nearly free, an executive's authentic lived experience and point of view become the scarce, defensible asset a competitor cannot fabricate.", tags:["Marketing","Thought Leadership","AI"]},
  {t:"Content Repurposing", d:"Converting one long-form asset &mdash; a podcast episode, a webinar, an interview &mdash; into multiple shorter, platform-native pieces (clips, quote graphics, newsletter sections) instead of producing each format from scratch.", tags:["Marketing","Thought Leadership"]},
  {t:"RevOps (Revenue Operations)", d:"Treating Marketing, Sales, and Customer Success as stages of one connected revenue process &mdash; with a shared data model, tooling, and metrics &mdash; instead of separate departments optimizing their own stage in isolation.", tags:["Marketing","RevOps"]},
  {t:"MQL (Marketing Qualified Lead)", d:"A lead that has crossed Marketing's scoring threshold based on fit and engagement signals, marking it ready for Sales review &mdash; the first step in the MQL &#x2192; SAL &#x2192; SQL qualification chain.", tags:["Marketing","RevOps","CRM"]},
  {t:"SAL (Sales Accepted Lead)", d:"A MQL that Sales has reviewed and accepted as worth actively working, sitting between MQL and SQL in the qualification chain. Tracking the MQL-to-SAL rate exposes whether Marketing and Sales agree on what \"qualified\" means.", tags:["Marketing","RevOps","CRM"]},
  {t:"SQL (Sales Qualified Lead)", d:"A SAL that Sales has qualified against budget, authority, need, and timing criteria and is ready to become a formal opportunity &mdash; the last qualification stage before pipeline.", tags:["Marketing","RevOps","CRM"]},
  {t:"Lead Scoring", d:"Assigning points to a contact or account based on fit (how closely it matches the ICP) and engagement (behavioral signals indicating intent), combined into a score that ranks who to prioritize for outreach.", tags:["Marketing","RevOps","CRM"]},
  {t:"Lead Routing", d:"Rules that automatically assign a qualified lead or account to the right rep &mdash; by territory, segment, round-robin, or account ownership &mdash; the moment it qualifies, so it doesn't go stale waiting for manual assignment.", tags:["Marketing","RevOps","CRM"]},
  {t:"Pipeline Governance", d:"Stage-exit criteria, regular pipeline reviews, and dashboards on stage conversion, velocity, and aging that keep deal stages honest and prevent a pipeline from becoming a wish list.", tags:["Marketing","RevOps","CRM"]},
  {t:"Agentic Marketing Orchestrator", d:"The role a marketer takes on when managing a fleet of AI agents instead of a fleet of tools &mdash; defining what each agent may decide autonomously vs. what needs approval, and monitoring output for drift.", tags:["Marketing","RevOps","AI"]},
  {t:"CRO (Conversion Rate Optimization)", d:"Continuous, evidence-based experimentation across marketing, product, and business surfaces to improve the rate at which visitors take a desired action &mdash; run as an ongoing program, not a one-off redesign.", tags:["Marketing","CRO"]},
  {t:"ICE Framework", d:"A prioritization method for scoring experiment ideas on Impact, Confidence, and Ease, so a CRO backlog is ranked by expected value rather than by whichever stakeholder asked loudest.", tags:["Marketing","CRO"]},
  {t:"Multivariate Test (MVT)", d:"An experiment that tests multiple variables and their combinations simultaneously, capturing interaction effects an A/B test would miss &mdash; at the cost of needing much more traffic to reach significance.", tags:["Marketing","CRO"]},
  {t:"Multi-Armed Bandit", d:"An experimentation method that continuously shifts traffic toward the currently best-performing variant instead of holding a fixed 50/50 split until significance, trading statistical rigor for faster exploitation of a likely winner.", tags:["Marketing","CRO"]},
  {t:"Measurement Plan", d:"A living document mapping business objective &#x2192; KPI &#x2192; tracked event &#x2192; parameters &#x2192; owner, built before any tagging work starts so implementation has a spec instead of a guess.", tags:["Marketing","Analytics"]},
  {t:"dataLayer", d:"A structured JavaScript object developers push events and parameters into and Google Tag Manager reads from &mdash; the agreed contract between engineering and analytics that keeps tagging stable across site changes.", tags:["Marketing","Analytics","GTM"]},
  {t:"GA4 Exploration", d:"Google Analytics 4's free-form, funnel, path, and cohort analysis techniques for ad-hoc questions beyond the standard reports.", tags:["Marketing","Analytics","GA4"]},
  {t:"AI Co-Analyst", d:"An AI system that drafts SQL, detects anomalies, generates hypotheses, and writes narrative summaries over analytics data &mdash; accelerating the first pass of analysis while a human still validates before any insight informs a decision.", tags:["Marketing","Analytics","AI"]},
  {t:"Churn Propensity", d:"A model score predicting an account's probability of churning within a defined window, trained on signals like engagement decay, support ticket volume, and billing behavior &mdash; ranked, not binary.", tags:["Marketing","Analytics","AI"]},
  {t:"Confidence Threshold", d:"A minimum sample size, statistical significance level, or model confidence score an insight must clear before it's surfaced as actionable rather than still-gathering-signal &mdash; a core data governance guardrail for AI-generated analysis.", tags:["Marketing","Analytics","Data Governance"]},
  {t:"Source Attribution (Data)", d:"Tracing every number in a report or briefing back to its query, dataset, and timestamp, so a stakeholder questioning a figure gets a verifiable answer instead of just trusting the AI that produced it.", tags:["Marketing","Analytics","Data Governance"]},
  {t:"Data-Driven Attribution (DDA)", d:"An attribution model that uses machine learning to compare converting and non-converting paths and assign credit based on each touchpoint's observed contribution to conversion probability, instead of a fixed rule like last-click or linear.", tags:["Marketing","Attribution","AI"]},
  {t:"Marketing Mix Modeling (MMM)", d:"Statistical modeling of aggregate spend vs. outcomes across channels over time, using privacy-safe data rather than individual-level tracking &mdash; regaining relevance as cookie deprecation and walled gardens limit what click-level attribution can see.", tags:["Marketing","Attribution","MMM"]},
  {t:"Capstone Project", d:"A final, integrative project presenting the full body of work &mdash; business context through architecture, journeys, and measured results &mdash; as one coherent story to an evaluating audience, rather than a recap of individual assignments.", tags:["Marketing","Capstone","Career"]},
  {t:"Industry Panel", d:"A capstone review audience made up of practicing marketers, hiring managers, and founders evaluating judgment under ambiguity, not academic rubric compliance &mdash; and, not incidentally, a room of potential referrals and hiring contacts.", tags:["Marketing","Capstone","Career"]},
  {t:"Case Study (Portfolio)", d:"A Problem &#x2192; Approach &#x2192; Result writeup of a project, structured so a skimming hiring manager can grasp the business problem, the system built to address it, and the measured outcome in under thirty seconds.", tags:["Marketing","Career","Portfolio"]},
  {t:"STAR Format", d:"A behavioral-interview answer structure &mdash; Situation, Task, Action, Result &mdash; used to turn a real project experience, such as a capstone, into a concrete, evidence-backed answer instead of a vague generality.", tags:["Career","Interviewing"]},
  {t:"90-Day Learning Plan", d:"A phased post-program plan (commonly 30/60/90 days) that closes specific, named skill gaps &mdash; often ones raised directly by panel critique &mdash; before applying and networking, rather than a generic list of courses.", tags:["Marketing","Career"]},
  {t:"Target Role Profile", d:"A mapping of a specific job title's core responsibilities to the portfolio artifacts and stories that demonstrate them, used to reframe the same underlying project differently for different roles.", tags:["Marketing","Career"]},
  {t:"CAC Payback", d:"Months to recover fully-loaded acquisition cost: <code>CAC / (ARPA &times; GM%)</code>. Gross-margin adjusted or it is fiction &mdash; this is the number a CFO checks against cash runway, and pushing the implied payback past ~18 months gets the plan rejected regardless of how good the creative is. Treat published medians (the usual 12&ndash;18 months for B2B SaaS) as folklore unless the source discloses its sample.", tags:["Marketing Ops"]},
  {t:"MER (Marketing Efficiency Ratio)", d:"<code>MER = total revenue / total marketing spend</code> &mdash; a blended efficiency number immune to the double-counting that breaks ROAS, because Meta and Google will both claim the same order. Break-even MER is <code>1 / contribution margin</code>, so a 22%-margin DTC brand must clear 4.55x and a 3.0x blended MER there is a loss wearing the costume of growth.", tags:["Marketing Ops"]},
  {t:"PQL (Product Qualified Lead)", d:"A user who has crossed a behavioural threshold inside the product that signals purchase intent &mdash; always some shape of frequency &times; breadth of feature adoption &times; depth of engagement, evaluated against a written threshold. Worth several times an MQL because the signal came from behaviour rather than a form fill, but it only exists if the events were instrumented first, which makes the instrumentation spec a marketing deliverable agreed before the sprint, not after the campaign fails.", tags:["Marketing Ops"]},
  {t:"Incrementality Testing", d:"A controlled experiment &mdash; geo holdout / matched-market, PSA or ghost-ads control, platform conversion-lift &mdash; that answers whether a channel is causing revenue rather than merely observing it. Expect branded search and retargeting to return incrementality well below their reported ROAS; that is the finding, not a bug. It costs real revenue during the holdout and needs statistical power computed before you start, so run it quarterly on one channel at a time and never as a daily optimisation signal.", tags:["Marketing Ops","Analytics"]},
  {t:"MMM (Marketing Mix Modeling)", d:"Aggregate time-series regression of sales on spend by channel, with adstock (carryover) and saturation curves, used to split next quarter across every channel including offline. Cookieless and privacy-safe, which is exactly why it returned after ATT; Google Meridian, Meta Robyn and PyMC-Marketing are the free options. Feed incrementality results in as Bayesian priors &mdash; an uncalibrated MMM is a regression on collinear spend, and it is never a creative- or keyword-level decision tool.", tags:["Marketing Ops","Analytics"]},
  {t:"Reverse ETL", d:"The activation layer that pushes warehouse-computed audiences and traits back out to CRM, lifecycle tools and ad platforms &mdash; Hightouch, Fivetran Activations, RudderStack &mdash; so raw data never leaves the governed environment. Skip it and you have the dashboard-only stack: perfect dbt models nobody can act on. Put a monitor on every sync, because a silently dead sync looks exactly like a quiet week.", tags:["Marketing Ops","Analytics"]},
  {t:"Consent Mode v2", d:"Google's four consent signals &mdash; <code>ad_storage</code> and <code>analytics_storage</code> from v1 plus <code>ad_user_data</code> and <code>ad_personalization</code> added in v2 &mdash; set to denied by default before <code>gtag</code> loads; Google is explicit that consent code called out of order makes the defaults not work. If <code>ad_user_data</code> is not granted, Google silently drops your hashed user data server-side: Enhanced Conversions still reads as configured, the tag still fires, and nothing matches. Server-side GTM has no consent mode of its own, so the CMP signal must ride inside each event payload.", tags:["Marketing Ops","AI Governance"]},
  {t:"Event Match Quality (EMQ)", d:"Meta's score out of 10 for how effective the customer information you send server-side is at matching to a Meta account. Meta publishes no target; practitioners treat 8+ as healthy on high-intent events such as Purchase and Lead and expect lower up-funnel &mdash; a PageView at 6 is normal, not a defect. Raise it by sending more normalised, SHA-256-hashed identifiers (<code>em</code>, <code>ph</code>, <code>fbc</code>, <code>external_id</code>, IP and user agent), and check it alongside deduplication rate and consent-granted rate rather than on its own.", tags:["Marketing Ops"]},
  {t:"Self-Reported Attribution", d:"Asking the buyer directly &mdash; a required free-text \"how did you hear about us?\" (HDYHAU) field on every high-intent form, classified nightly by an LLM and written back to the CRM. Use free text, not a dropdown, because a dropdown only ever returns the options you already believed in. It carries recall and non-response bias so it can never be your only number, but it is the one method that sees dark social: in Refine Labs' 2023 hybrid-attribution sample, software credited web search with 78% of demand creation while buyers self-reported it at 12%.", tags:["Marketing Ops","Analytics"]},
  {t:"CO-STAR", d:"Context, Objective, Style, Tone, Audience, Response format &mdash; the prompt scaffold created by Sheila Teo, which won Singapore GovTech's first GPT-4 prompt engineering competition in 2023 and is the one acronym framework with a named author and a documented origin. It is the marketing default because Audience and Tone are first-class fields rather than afterthoughts. RTF, RACE, TAG and CRISPE are community folklore with no primary paper &mdash; say so rather than fabricating a citation.", tags:["Prompt Engineering"]},
  {t:"Context Rot", d:"The finding (Chroma, 2025) that model quality degrades as input length grows &mdash; across all 18 frontier models tested, at every increment, non-uniformly, and well before the advertised limit. With \"lost in the middle\" (Liu et al., 2023) it means a 1M-token window is a credit limit, not a target: put the instruction and question at the top, the critical facts at the bottom, and the bulk in the middle where degradation costs least. Retrieve 5 great chunks, not 200 mediocre ones.", tags:["Prompt Engineering"]},
  {t:"System Instruction", d:"The highest-authority prompt slot, sent on every turn &mdash; <code>system_instruction</code> in Gemini's Interactions API, top-level <code>system</code> on Claude, <code>instructions</code> on OpenAI's Responses API. Brand voice, constraints, output rules and refusal rules belong here because it outranks a user asking for \"something punchier\", it is cacheable, and it version-controls as one artifact the whole org shares. Never put anything volatile in it &mdash; a timestamp, user name or session ID near the top invalidates the entire prompt cache, since caching is a prefix match.", tags:["Prompt Engineering"]},
  {t:"Vibe Coding", d:"Specifying intent in natural language, letting an agent write and run the code, and judging the output rather than reading the source &mdash; coined by Andrej Karpathy on 2 February 2025 and made Collins Dictionary's Word of the Year 2025. Green zone: internal calculators, brief generators, a form-less landing page. Amber: anything with a form, or calling a paid API for anonymous visitors. Red: customer PII, payments, authentication, or any agent with write access to production. You cannot judge whether the code is good &mdash; only what the worst headline is if it breaks at 2am.", tags:["Agentic AI","No-Code"]},
  {t:"Gem (Gemini)", d:"A saved Gemini assistant &mdash; a system prompt plus a small private corpus, built from Google's Persona / Task / Context / Format skeleton, with knowledge capped at 10 files of up to 100 MB each and no video or audio. The cheapest durable AI asset a marketer can own: one Gem per recurring job (brief writer, ad-copy QA, competitor summariser). Persona + Format is the system slot, Task is the user turn, and knowledge files are retrieved context carrying exactly the same injection risk &mdash; load the brand voice guide and banned-claims list, never the CRM export.", tags:["Gemini","No-Code"]},
  {t:"Interactions API", d:"Gemini's primary interface since GA in June 2026: <code>system_instruction</code> is a flat top-level string, <code>input</code> replaces the <code>contents[]</code> array, and response text moves to <code>steps[].content[].text</code>. The older <code>generateContent</code> is labelled legacy but fully supported &mdash; the hazard is silent breakage, because a parser still reading <code>candidates[].content.parts[].text</code> returns <code>undefined</code> instead of throwing. It also stores every Interaction by default (<code>store=true</code>, 55-day retention paid, 1 day free), which makes adopting it a data-governance decision, not just a coding one.", tags:["Gemini"]},
  {t:"Human-on-the-Loop (HOTL)", d:"The control regime where an agent executes autonomously inside guardrails while a human supervises dashboards and alerts and retains the power to intervene, pause or roll back &mdash; between human-in-the-loop (approves each action, does not scale past a few hundred a day) and human-out-of-the-loop (reviews outcomes after the fact). Where most mature marketing automation lands. Choose the regime by speed of harm and reversibility, never by what the agent is technically capable of: gate the email blast, supervise the capped bid adjustment, do not gate the doc draft.", tags:["AI Governance","Agentic AI"]},
  {t:"Autonomy Tier", d:"A published, per-workflow autonomy setting on the A0&ndash;A4 ladder: A0 draft-only, A1 a human approves each prepared action, A2 sampled review plus every low-confidence flag, A3 human-on-the-loop inside hard constraints, A4 the agent owns the loop. Promote one tier at a time and only after N clean runs with the eval suite green, and pair every tier with the five standing gates &mdash; MONEY, AUDIENCE, CLAIM, BRAND &amp; LEGAL, PUBLISH. Constraints must be machine-enforceable at the orchestration layer: an agent that has read the brand-guidelines PDF has not been constrained.", tags:["AI Governance","Agentic AI"]},
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

  // Click: tap to show tooltip, tap again to dismiss (never navigate away)
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

  // Slide hash tracking for browser back/forward button support
  (function() {
    var slides = document.querySelectorAll('.slide');
    if (slides.length < 2) return; // not a slide deck

    // Find the showSlide function from the course's own script
    var origShowSlide = window.showSlide;
    if (typeof origShowSlide !== 'function') return;

    // Patch showSlide to update URL hash
    var skipPush = false;
    window.showSlide = function(index) {
      origShowSlide(index);
      var slideNum = Math.max(0, Math.min(index, slides.length - 1)) + 1;
      if (!skipPush && history.pushState) {
        history.pushState({slide: slideNum}, '', '#slide-' + slideNum);
      }
    };

    // Restore slide from hash on page load
    var hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      var num = parseInt(hash.replace('#slide-', ''), 10);
      if (num > 0 && num <= slides.length) {
        window.showSlide(num - 1);
      }
    }

    // Handle browser back/forward
    window.addEventListener('popstate', function(e) {
      if (e.state && e.state.slide) {
        skipPush = true;
        window.showSlide(e.state.slide - 1);
        skipPush = false;
      }
    });
  })();

  // ── Syntax Highlighting (highlight.js, lazy-loaded) ──────────────
  (function() {
    var pres = document.querySelectorAll('pre');
    if (pres.length === 0) return;

    // Theme CSS that respects our light/dark mode
    var style = document.createElement('style');
    style.textContent = [
      // Override highlight.js backgrounds to match our theme
      'pre code.hljs{background:transparent!important;padding:0!important;font-size:inherit!important;line-height:inherit!important}',
      // Light mode token colors
      '.hljs-keyword,.hljs-selector-tag,.hljs-built_in,.hljs-type{color:#DA7756;font-weight:600}',
      '.hljs-string,.hljs-attr{color:#5A9A6E}',
      '.hljs-number,.hljs-literal{color:#B07D48}',
      '.hljs-comment,.hljs-meta{color:#6B6560;font-style:italic}',
      '.hljs-function .hljs-title,.hljs-title.function_,.hljs-title.class_{color:#6B8EC9}',
      '.hljs-variable,.hljs-params{color:#E8E2DC}',
      '.hljs-symbol,.hljs-bullet{color:#DA7756}',
      '.hljs-regexp{color:#D4976C}',
      '.hljs-addition{color:#5A9A6E}',
      '.hljs-deletion{color:#c0392b}',
      '.hljs-operator,.hljs-punctuation{color:#9B9590}',
      '.hljs-property{color:#E8E2DC}',
      '.hljs-tag{color:#DA7756}',
      '.hljs-name{color:#DA7756}',
      '.hljs-attribute{color:#6B8EC9}',
      // Section headers in pre blocks (lines starting with #)
      '.hljs-meta .hljs-keyword{color:#DA7756}',
      '.hljs-selector-class{color:#6B8EC9}',
      '.hljs-subst{color:#E8E2DC}',
    ].join('\n');
    document.head.appendChild(style);

    // Load highlight.js from CDN
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    script.async = true;
    script.onload = function() {
      // Register additional languages we use frequently
      var langs = [
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/rust.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/dockerfile.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/nginx.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/yaml.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/hcl.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/protobuf.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/x86asm.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/armasm.min.js',
      ];
      var loaded = 0;
      function highlightAll() {
        // Don't highlight pre blocks that are clearly ASCII art or diagrams
        pres.forEach(function(pre) {
          var text = pre.textContent;
          // Skip if it looks like ASCII art (lots of box-drawing, arrows, or layout)
          if ((text.match(/[─│┌┐└┘├┤┬┴┼═║╔╗╚╝╠╣╦╩╬▸→←↑↓▼△►◄●○■□]/g) || []).length > 5) return;
          if ((text.match(/[\+\-\|]{3,}/g) || []).length > 3) return;
          // Skip if no code-like content (just plain text descriptions)
          var codeSignals = (text.match(/[{}();=<>\/\[\]]/g) || []).length;
          if (codeSignals < 3 && text.length > 50) return;
          hljs.highlightElement(pre);
        });
      }
      langs.forEach(function(url) {
        var s = document.createElement('script');
        s.src = url;
        s.async = true;
        s.onload = function() {
          loaded++;
          if (loaded === langs.length) highlightAll();
        };
        s.onerror = function() {
          loaded++;
          if (loaded === langs.length) highlightAll();
        };
        document.body.appendChild(s);
      });
    };
    document.body.appendChild(script);
  })();
})();








