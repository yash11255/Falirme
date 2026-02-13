import { Search, Layers, FileText, ShieldCheck, Webhook, Bell } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Search />,
      title: "AI Manipulation Detection",
      description: "Identify parts of an image that have been generated or modified by AI tools like Midjourney or Photoshop Generative Fill."
    },
    {
      icon: <Layers />,
      title: "Deep Image Forensics",
      description: "Scan for compression artifacts, noise pattern mismatches, and copy-move cloning inconsistencies."
    },
    {
      icon: <FileText />,
      title: "Metadata Scanning",
      description: "Detect edited EXIF data or traces of image editing software used to 'doctor' the evidence."
    },
    {
      icon: <ShieldCheck />,
      title: "Fraud Risk Scoring",
      description: "A unified risk score (0-100) that gives your staff clear guidance on whether to approve or investigate a return."
    },
    {
      icon: <Webhook />,
      title: "API Ready",
      description: "Native integrations for Shopify, WooCommerce, and custom enterprise headless commerce platforms."
    },
    {
      icon: <Bell />,
      title: "Real-Time Alerts",
      description: "Get notified via Slack, email, or your helpdesk (Zendesk/Gorgias) the moment a high-risk fraud is detected."
    }
  ];

  return (
    <section id="features" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Cybersecurity for Logistics</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Advanced tools designed to protect D2C brands from sophisticated digital fraud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-colors"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="text-primary mb-6 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
