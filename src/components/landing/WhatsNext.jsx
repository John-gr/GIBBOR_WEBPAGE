import styles from './WhatsNext.module.css';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';

const categories = [
  {
    number: '01',
    color: '#00CFFF',
    title: 'Evidence That Wins Claims',
    description:
      'The strongest argument for tamper-proof evidence is a claim that gets paid. These features turn GIBBOR\'s evidence into a tool insurers and legal teams can use directly.',
    features: [
      {
        name: 'Insurance-Ready Evidence Package',
        detail:
          'Every incident automatically generates a sealed report — timestamp, GPS, media hashes, chain of custody, and a public verification link — ready to submit to an insurer or authority.',
      },
      {
        name: 'Independent Verification Portal',
        detail:
          'A public web tool where any insurer, lawyer, or investigator can paste a hash and confirm authenticity without going through us.',
      },
      {
        name: 'One-Tap Insurance Filing',
        detail:
          'Direct integration with partner insurers, so a verified claim can be opened from inside the app the moment an incident ends.',
      },
    ],
  },
  {
    number: '02',
    color: '#AAFF2D',
    title: 'Prevention Before the Incident',
    description:
      'The best emergency is the one that doesn\'t happen. These features move GIBBOR from reactive to proactive.',
    features: [
      {
        name: 'Real-Time Risk Scoring',
        detail:
          'Neighborhood-level safety ratings powered by our own incident data — a layer no competitor can replicate.',
      },
      {
        name: 'Pre-Trip Safety Briefing',
        detail:
          'Itinerary-aware risk notes ahead of travel: airport taxi scams in Mexico City, drug-spiking hotspots in Brazil, pickpocket zones in Rome.',
      },
      {
        name: 'Geofencing Alerts',
        detail:
          'Discreet notifications when entering a high-risk area, calibrated by time of day.',
      },
      {
        name: 'Verified Transport',
        detail:
          'Pre-ride verification for taxis and ride-share drivers, targeting express-kidnapping risk at airports and tourist hubs.',
      },
    ],
  },
  {
    number: '03',
    color: '#FF1F8E',
    title: 'Smarter Emergency Response',
    description: 'Refinements to the moment that matters most.',
    features: [
      {
        name: 'Duress PIN',
        detail:
          'A second PIN that looks like a normal cancellation but silently escalates to authorities.',
      },
      {
        name: 'Discreet Mode',
        detail:
          'A decoy screen disguised as an ordinary app while audio and video record in the background.',
      },
      {
        name: 'Local Emergency Routing',
        detail:
          'Automatic connection to the correct emergency number in nearly 200 countries — no fumbling with codes the traveler doesn\'t know.',
      },
      {
        name: 'Offline & Satellite Fallback',
        detail:
          'Continued operation in areas without mobile coverage — a gap most competing apps don\'t close.',
      },
      {
        name: 'Automatic Incident Detection',
        detail:
          'Accelerometer-based triggers for falls, phone-snatch events, and anomalous stops — for cases where the traveler doesn\'t even have time to press the button.',
      },
      {
        name: '24/7 Monitoring Center',
        detail:
          'Human escalation for top-tier plans, with direct dispatch capability.',
      },
    ],
  },
  {
    number: '04',
    color: '#8B2FC9',
    title: 'Built for Our Partners',
    description:
      'The capabilities banks, insurers, and corporate clients need to deploy GIBBOR at scale.',
    features: [
      {
        name: 'White-Label & Co-Branding',
        detail:
          'Full visual customization so partners can offer GIBBOR under their own brand.',
      },
      {
        name: 'Partner Dashboard',
        detail:
          'Aggregated, anonymized usage analytics, incident heatmaps, ROI reporting, and a compliance-grade audit trail.',
      },
      {
        name: 'In-App Onboarding',
        detail:
          'One-tap activation directly from a partner\'s existing mobile app — eliminating the friction that kills activation rates.',
      },
      {
        name: 'Corporate Duty-of-Care Console',
        detail:
          'For HR and security teams managing employees in high-risk markets: real-time location during incidents, mass-notification, and travel-risk reporting.',
      },
    ],
  },
  {
    number: '05',
    color: '#FF6B1A',
    title: 'Beyond the App',
    description: 'Extending GIBBOR\'s reach to where travelers actually are.',
    features: [
      {
        name: 'Smartwatch Integration',
        detail:
          'Native apps for Apple Watch and Wear OS, extending the panic button to the wrist with no additional hardware.',
      },
      {
        name: 'Family Companion App',
        detail:
          'Trusted contacts can view check-ins, see safe-arrival timers, and receive incident alerts.',
      },
      {
        name: 'AI Safety Assistant',
        detail:
          'In-app guidance — "Is this neighborhood safe right now?", "What should I do next?" — trained on the platform\'s own incident data.',
      },
      {
        name: 'Risk Intelligence as a Product',
        detail:
          'Anonymized, aggregated risk data licensed to insurers, corporate-travel managers, and government bodies — turning our platform\'s data into a second revenue stream.',
      },
    ],
  },
];

export function WhatsNext() {
  return (
    <Section id="whats-next">
      <div className={styles.header}>
        <div className={styles.badge}>Roadmap</div>
        <Heading level={2} className={styles.title}>
          What's Next at GIBBOR
        </Heading>
        <Body size="lg" className={styles.intro}>
          GIBBOR began as a tamper-proof evidence system for travel emergencies.
          We're now extending it into a complete travel safety platform — one that
          helps prevent incidents, not just document them.
        </Body>
      </div>

      <div className={styles.categories}>
        {categories.map((cat) => (
          <div
            key={cat.number}
            className={styles.category}
            style={{ '--cat-color': cat.color }}
          >
            <div className={styles.catHeader}>
              <span className={styles.catNumber}>{cat.number}</span>
              <div>
                <h3 className={styles.catTitle}>{cat.title}</h3>
                <p className={styles.catDesc}>{cat.description}</p>
              </div>
            </div>

            <div className={styles.features}>
              {cat.features.map((f) => (
                <div key={f.name} className={styles.feature}>
                  <div className={styles.featureDot} />
                  <div>
                    <span className={styles.featureName}>{f.name}. </span>
                    <span className={styles.featureDetail}>{f.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className={styles.footer}>
        This roadmap evolves in partnership with our pilot allies. Features advance
        based on what real travelers — and the institutions that protect them —
        actually need.
      </p>
    </Section>
  );
}
