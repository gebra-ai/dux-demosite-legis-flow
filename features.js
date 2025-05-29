// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Document Generator Demo
    const generateButton = document.getElementById('generate-demo');
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const documentType = document.getElementById('document-type-selector').value;
            const demoOutput = document.querySelector('.demo-output');
            
            demoOutput.innerHTML = '<div class="loading">Generating document...</div>';
            
            // Simulate API call delay
            setTimeout(() => {
                let output = '';
                
                switch(documentType) {
                    case 'nda':
                        output = `<h4>Non-Disclosure Agreement Preview</h4>
                                <p><strong>THIS AGREEMENT</strong> is made on [Auto-Generated Date] between the parties...</p>
                                <p>1. <strong>Confidential Information:</strong> "Confidential Information" means any information disclosed by either party...</p>
                                <p>2. <strong>Obligations:</strong> The Recipient agrees to protect the confidential information...</p>
                                <p><em>Document customized for your jurisdiction: California, USA</em></p>`;
                        break;
                    case 'employment':
                        output = `<h4>Employment Contract Preview</h4>
                                <p><strong>EMPLOYMENT AGREEMENT</strong> entered into on [Auto-Generated Date]...</p>
                                <p>1. <strong>Position:</strong> The Company hereby employs the Employee as [Position]...</p>
                                <p>2. <strong>Compensation:</strong> For services rendered, the Employee shall receive...</p>
                                <p><em>Document customized with employment laws for: California, USA</em></p>`;
                        break;
                    case 'privacy':
                        output = `<h4>Privacy Policy Preview</h4>
                                <p><strong>PRIVACY POLICY</strong> Last Updated: [Auto-Generated Date]</p>
                                <p>1. <strong>Information We Collect:</strong> We may collect personal information that you provide...</p>
                                <p>2. <strong>How We Use Your Information:</strong> We may use the information we collect...</p>
                                <p><em>CCPA and GDPR compliant policy automatically generated</em></p>`;
                        break;
                    case 'terms':
                        output = `<h4>Terms of Service Preview</h4>
                                <p><strong>TERMS OF SERVICE</strong> Last Updated: [Auto-Generated Date]</p>
                                <p>1. <strong>Acceptance of Terms:</strong> By accessing our service, you agree to be bound...</p>
                                <p>2. <strong>User Accounts:</strong> When you create an account with us, you guarantee...</p>
                                <p><em>Includes automatic e-commerce provisions based on your business type</em></p>`;
                        break;
                }
                
                demoOutput.innerHTML = output;
            }, 1500);
        });
    }
    
    // Analysis Slider
    const analysisSlider = document.getElementById('analysis-level');
    if (analysisSlider) {
        analysisSlider.addEventListener('input', () => {
            const value = analysisSlider.value;
            const analysisPreview = document.getElementById('analysis-preview');
            
            let title = '';
            let content = '';
            
            switch(value) {
                case '1':
                    title = 'Basic Analysis';
                    content = `<ul>
                                <li>Fundamental legal verification</li>
                                <li>Spelling and grammar checks</li>
                                <li>Simple risk assessment</li>
                              </ul>`;
                    break;
                case '2':
                    title = 'Standard Analysis';
                    content = `<ul>
                                <li>Advanced legal verification</li>
                                <li>Clause-by-clause risk assessment</li>
                                <li>Industry-standard compliance check</li>
                                <li>Negotiation guidance</li>
                              </ul>`;
                    break;
                case '3':
                    title = 'Advanced Analysis';
                    content = `<ul>
                                <li>Comprehensive legal analysis</li>
                                <li>Cross-document consistency check</li>
                                <li>Multi-jurisdiction compliance</li>
                                <li>Advanced risk predictions</li>
                                <li>AI-powered negotiation strategy</li>
                              </ul>`;
                    break;
            }
            
            analysisPreview.innerHTML = `<h4>${title}</h4>${content}`;
        });
    }
    
    // Region Map
    const regionButtons = document.querySelectorAll('.region-button');
    if (regionButtons.length > 0) {
        regionButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                regionButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const region = button.getAttribute('data-region');
                const regionInfo = document.getElementById('region-details');
                
                let content = '';
                
                switch(region) {
                    case 'us':
                        content = `<h4>United States Compliance</h4>
                                  <p>Includes features for:</p>
                                  <ul>
                                    <li>Federal regulations compliance</li>
                                    <li>State-specific laws (all 50 states)</li>
                                    <li>CCPA compliance for privacy policies</li>
                                    <li>Industry-specific regulations (HIPAA, FINRA, etc.)</li>
                                  </ul>`;
                        break;
                    case 'eu':
                        content = `<h4>European Union Compliance</h4>
                                  <p>Includes features for:</p>
                                  <ul>
                                    <li>GDPR compliant documentation</li>
                                    <li>EU Member State specific variations</li>
                                    <li>Post-Brexit adjustments</li>
                                    <li>EU consumer law compliance</li>
                                  </ul>`;
                        break;
                    case 'uk':
                        content = `<h4>United Kingdom Compliance</h4>
                                  <p>Includes features for:</p>
                                  <ul>
                                    <li>UK GDPR implementation</li>
                                    <li>Post-Brexit regulatory framework</li>
                                    <li>Companies Act compliance</li>
                                    <li>UK-specific employment law</li>
                                  </ul>`;
                        break;
                    case 'aus':
                        content = `<h4>Australia Compliance</h4>
                                  <p>Includes features for:</p>
                                  <ul>
                                    <li>Australian Privacy Principles</li>
                                    <li>Fair Work Act compliance</li>
                                    <li>Australian Consumer Law</li>
                                    <li>State-specific variations</li>
                                  </ul>`;
                        break;
                    case 'can':
                        content = `<h4>Canada Compliance</h4>
                                  <p>Includes features for:</p>
                                  <ul>
                                    <li>PIPEDA compliance</li>
                                    <li>Provincial privacy laws</li>
                                    <li>Canadian employment standards</li>
                                    <li>Bilingual documentation support</li>
                                  </ul>`;
                        break;
                }
                
                regionInfo.innerHTML = content;
            });
        });
    }
    
    // Workflow Steps
    const workflowSteps = document.querySelectorAll('.workflow-step');
    if (workflowSteps.length > 0) {
        workflowSteps.forEach(step => {
            step.addEventListener('click', () => {
                // Remove active class from all steps
                workflowSteps.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked step
                step.classList.add('active');
                
                const stepId = step.id;
                const workflowContent = document.getElementById('workflow-content');
                
                let content = '';
                
                switch(stepId) {
                    case 'step1':
                        content = `<h4>Draft Creation</h4>
                                  <p>Initial document generated by AI based on your specifications</p>
                                  <ul>
                                    <li>Answer simple questions about your needs</li>
                                    <li>AI generates custom document draft</li>
                                    <li>Make initial adjustments</li>
                                  </ul>`;
                        break;
                    case 'step2':
                        content = `<h4>Team Review</h4>
                                  <p>Collaborate with stakeholders to refine the document</p>
                                  <ul>
                                    <li>Share with team members</li>
                                    <li>Comment on specific clauses</li>
                                    <li>Track suggested changes</li>
                                    <li>Version control keeps history organized</li>
                                  </ul>`;
                        break;
                    case 'step3':
                        content = `<h4>Legal Verification</h4>
                                  <p>Ensure legal soundness with advanced AI analysis</p>
                                  <ul>
                                    <li>AI risk assessment</li>
                                    <li>Compliance verification</li>
                                    <li>Optional attorney review</li>
                                    <li>Final adjustments based on recommendations</li>
                                  </ul>`;
                        break;
                    case 'step4':
                        content = `<h4>Approval & Signing</h4>
                                  <p>Finalize and execute the document</p>
                                  <ul>
                                    <li>Approval workflow with notifications</li>
                                    <li>Electronic signature collection</li>
                                    <li>Automatic record keeping</li>
                                    <li>Compliance documentation generation</li>
                                  </ul>`;
                        break;
                }
                
                workflowContent.innerHTML = content;
            });
        });
    }
    
    // Integration Logos
    const logoItems = document.querySelectorAll('.logo-item');
    const integrationInfo = document.getElementById('integration-info');
    
    if (logoItems.length > 0 && integrationInfo) {
        logoItems.forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                const partner = logo.getAttribute('data-name');
                
                let info = '';
                
                switch(partner) {
                    case 'DocuSign':
                        info = '<h4>DocuSign</h4><p>Send documents for electronic signature directly from LegisFlow. Track signature status and automatically save signed copies.</p>';
                        break;
                    case 'Salesforce':
                        info = '<h4>Salesforce</h4><p>Generate contracts directly from your Salesforce opportunities. Customer data syncs automatically to populate agreement fields.</p>';
                        break;
                    case 'Google':
                        info = '<h4>Google Workspace</h4><p>Store documents in Google Drive, collaborate with comments in Google Docs, and sync with Google Calendar for deadlines.</p>';
                        break;
                    case 'Dropbox':
                        info = '<h4>Dropbox</h4><p>Automatically save and organize documents in your Dropbox account with customizable folder structures.</p>';
                        break;
                    case 'Slack':
                        info = '<h4>Slack</h4><p>Receive notifications about document updates and approval requests directly in your Slack channels.</p>';
                        break;
                    case 'Zapier':
                        info = '<h4>Zapier</h4><p>Connect LegisFlow to 3,000+ apps with no-code automation workflows to streamline your document processes.</p>';
                        break;
                    case 'Notion':
                        info = '<h4>Notion</h4><p>Embed and reference your legal documents in your Notion workspace for better knowledge management.</p>';
                        break;
                    case 'Microsoft':
                        info = '<h4>Microsoft 365</h4><p>Seamless integration with Word, OneDrive, Teams, and Outlook for comprehensive document management.</p>';
                        break;
                }
                
                integrationInfo.innerHTML = info;
            });
            
            logo.addEventListener('mouseleave', () => {
                integrationInfo.innerHTML = '<p>Hover over an icon to learn more about the integration</p>';
            });
        });
    }
    
    // Billing Toggle for Pricing
    const billingToggle = document.getElementById('billing-toggle');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', () => {
            const isAnnual = billingToggle.checked;
            
            // Free plan stays the same
            const proPrice = document.getElementById('pro-price');
            const enterprisePrice = document.getElementById('enterprise-price');
            
            if (isAnnual) {
                proPrice.textContent = '$23/month';
                enterprisePrice.textContent = '$79/month';
            } else {
                proPrice.textContent = '$29/month';
                enterprisePrice.textContent = '$99/month';
            }
        });
    }
    
    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    
    if (accordions.length > 0) {
        accordions.forEach(accordion => {
            const header = accordion.querySelector('.accordion-header');
            const content = accordion.querySelector('.accordion-content');
            
            header.addEventListener('click', () => {
                const isActive = accordion.classList.contains('active');
                
                // Close all accordions
                accordions.forEach(a => {
                    a.classList.remove('active');
                    a.querySelector('.accordion-content').style.maxHeight = 0;
                });
                
                // If the clicked accordion wasn't active, open it
                if (!isActive) {
                    accordion.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }
});
