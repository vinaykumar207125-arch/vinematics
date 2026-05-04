import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { get, set } from 'idb-keyval';

export type PortfolioItem = {
  id: string;
  img: string | Blob;
  cat: string;
  title: string;
};

interface SiteContextType {
  globalBgColor: string;
  setGlobalBgColor: (bg: string) => void;
  heroBg: string | Blob;
  setHeroBg: (bg: string | Blob) => void;
  portfolioItems: PortfolioItem[];
  addPortfolioItem: (item: PortfolioItem) => void;
  removePortfolioItem: (id: string) => void;
}

const defaultPortfolio: PortfolioItem[] = [
  { id: '1', img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", cat: "Weddings", title: "The Royal Wedding" },
  { id: '2', img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", cat: "Products", title: "Minimalist Tech" },
  { id: '3', img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop", cat: "Brand Shoots", title: "Automotive Edge" },
  { id: '4', img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", cat: "Cafes & Restaurants", title: "Evening Aesthetics" },
  { id: '5', img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", cat: "Fashion", title: "Editorial Summer" },
  { id: '6', img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", cat: "Weddings", title: "Intimate Vows" },
];

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [globalBgColor, setGlobalBgColorState] = useState<string>('#050505');
  const [heroBg, setHeroBgState] = useState<string | Blob>("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop");
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(defaultPortfolio);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const storedGlobalBg = await get('globalBgColor');
        if (storedGlobalBg) setGlobalBgColorState(storedGlobalBg);

        const storedHeroBg = await get('heroBg');
        if (storedHeroBg) setHeroBgState(storedHeroBg);

        const storedPortfolio = await get('portfolioItems');
        if (storedPortfolio && storedPortfolio.length > 0) {
          setPortfolioItems(storedPortfolio);
        }
      } catch (err) {
        console.error("Failed to load data from IndexedDB", err);
      }
      setIsReady(true);
    }
    loadData();
  }, []);

  useEffect(() => {
    document.body.style.background = globalBgColor;
    // Set attachment fixed so gradients look good when scrolling
    document.body.style.backgroundAttachment = 'fixed';
  }, [globalBgColor]);

  const setGlobalBgColor = async (bg: string) => {
    setGlobalBgColorState(bg);
    await set('globalBgColor', bg);
  };

  const setHeroBg = async (bg: string | Blob) => {
    setHeroBgState(bg);
    await set('heroBg', bg);
  };

  const addPortfolioItem = async (item: PortfolioItem) => {
    const nextList = [item, ...portfolioItems];
    setPortfolioItems(nextList);
    await set('portfolioItems', nextList);
  };

  const removePortfolioItem = async (id: string) => {
    const nextList = portfolioItems.filter(p => p.id !== id);
    setPortfolioItems(nextList);
    await set('portfolioItems', nextList);
  };

  // Wait for IndexedDB to load before rendering the site app
  if (!isReady) return null;

  return (
    <SiteContext.Provider value={{
      globalBgColor, setGlobalBgColor,
      heroBg, setHeroBg,
      portfolioItems, addPortfolioItem, removePortfolioItem
    }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
