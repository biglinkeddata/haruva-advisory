import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <Separator className="mb-8" />

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services provided by Haruva Advisory ("we," "our," or "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Haruva Advisory provides strategic advisory, transformation, and consulting services to businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Strategy development and commercial excellence</li>
                <li>Leadership alignment and organizational effectiveness</li>
                <li>Operational transformation and organizational design</li>
                <li>Brand partnership and strategic advisory services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Cooperate with our team to facilitate project success</li>
                <li>Maintain confidentiality of proprietary methodologies and tools shared during engagements</li>
                <li>Make payment according to agreed terms and schedules</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All intellectual property rights in our methodologies, frameworks, tools, and deliverables remain the property of Haruva Advisory unless explicitly transferred in writing. Client-specific deliverables and work products created during engagements will be licensed to the client for their internal business use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We respect the confidentiality of client information and will not disclose confidential information to third parties without consent, except as required by law. Both parties agree to maintain the confidentiality of sensitive business information shared during the course of our engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms will be specified in individual engagement agreements. General terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fees are payable according to the agreed schedule</li>
                <li>Late payments may incur interest charges</li>
                <li>Services may be suspended for non-payment</li>
                <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Haruva Advisory shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services. Our total liability shall not exceed the fees paid for the specific engagement giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate an engagement according to the terms specified in the relevant agreement. Upon termination, all outstanding fees become immediately due and payable. Obligations regarding confidentiality and intellectual property survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express or implied. While we strive for excellence, we do not guarantee specific outcomes or results. The success of any engagement depends on various factors, including client participation and market conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through negotiation or, if necessary, through appropriate legal channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitute acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our website contact form or reach out to us directly.
              </p>
            </section>
          </div>
          
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mt-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
