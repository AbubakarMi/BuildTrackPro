import LegalHeader from '@/components/legal/legal-header';

export default function TermsOfServicePage() {
  return (
    <div className="bg-secondary min-h-screen">
      <LegalHeader />
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background p-8 md:p-12 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <h2 className="text-foreground">1. Agreement to Terms</h2>
                <p>
                    By using our application, BuildTrack Pro (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
                </p>

                <h2 className="text-foreground">2. Use of the Service</h2>
                <p>
                    You may use the Service only if you can form a binding contract with BuildTrack Pro, and only in compliance with these Terms and all applicable laws. When you create your BuildTrack Pro account, you must provide us with accurate and complete information.
                </p>

                <h2 className="text-foreground">3. Your Content</h2>
                <p>
                    You retain ownership of all intellectual property rights in your content. We do not claim ownership over any of your content. These Terms do not grant us any licenses or rights to your content except for the limited rights needed for us to provide the Service.
                </p>

                <h2 className="text-foreground">4. Subscriptions</h2>
                <p>
                    Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p>
                    At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or BuildTrack Pro cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting BuildTrack Pro customer support team.
                </p>
                
                <h2 className="text-foreground">5. Termination</h2>
                <p>
                    We may terminate or suspend your access to the Service at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                </p>

                <h2 className="text-foreground">6. Limitation of Liability</h2>
                <p>
                    In no event shall BuildTrack Pro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>

                <h2 className="text-foreground">7. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-foreground">8. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at support@buildtrack.pro.
                </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
