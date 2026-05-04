/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProcessAndBenefits from './components/ProcessAndBenefits';
import ShootPlans from './components/ShootPlans';
import Portfolio from './components/Portfolio';
import TestimonialsAndContact from './components/TestimonialsAndContact';
import AdminPanel from './components/AdminPanel';
import { SiteProvider } from './context/SiteContext';

export default function App() {
  return (
    <SiteProvider>
      <main className="min-h-screen text-white selection:bg-white/30 selection:text-white">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <ProcessAndBenefits />
        <ShootPlans />
        <Portfolio />
        <TestimonialsAndContact />
        <AdminPanel />
      </main>
    </SiteProvider>
  );
}
