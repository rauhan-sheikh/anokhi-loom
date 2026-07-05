// Design plan: Deep espresso + antique gold + aged parchment — artisan ledger aesthetic.
// Signature: Repeating Indian textile diamond SVG border pattern at header/footer.
// Avoids the cream+terracotta AI default; uses a jewel-toned handcraft palette instead.

import type { ReactNode } from "react";

type SectionBandProps = {
  label: string;
  badge?: string;
};

type ScrunchieItem = {
  name: string;
  color: string;
};

type ScrunchieRowProps = ScrunchieItem & {
  isLast: boolean;
  idx: number;
};

type ItemRowProps = {
  name: string;
  detail?: string;
  price?: string;
  note?: string;
  isLast: boolean;
  idx: number;
};

type ProductTableProps = {
  children: ReactNode;
};

type CategoryHeadingProps = {
  icon: string;
  title: string;
};

const C = {
  espresso: "#1C0F05",
  sienna: "#4B2714",
  umber: "#7A3E1C",
  gold: "#BF8640",
  parchment: "#F5EDD9",
  ivory: "#FDFAF4",
  lightUmber: "#9B6B45",
};

const COLOR_DOTS: Record<string, string> = {
  "Chocolate Brown": "#6B3A2A",
  "Baby Pink": "#F4A7B0",
  "Teal Blue": "#2A9D8F",
  Blue: "#3A6FD8",
  Black: "#1C1C1C",
  Wine: "#722F37",
  Red: "#CC2200",
  White: "#D0C8BE",
  "Sky Blue": "#87CEEB",
  "Baby Blue": "#89CFF0",
  "Navy Plaid": "#1C3A6A",
};

const TextilePattern = () => (
  <svg width="100%" height="20" style={{ display: "block" }}>
    <defs>
      <pattern
        id="tp"
        x="0"
        y="0"
        width="28"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <polygon
          points="14,2 26,10 14,18 2,10"
          stroke={C.gold}
          strokeWidth="0.8"
          fill="none"
          opacity="0.35"
        />
        <circle cx="14" cy="10" r="1.5" fill={C.gold} opacity="0.45" />
      </pattern>
    </defs>
    <rect width="100%" height="20" fill={`url(#tp)`} />
  </svg>
);

const SectionBand = ({ label, badge }: SectionBandProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: `linear-gradient(90deg, ${C.sienna} 0%, ${C.umber} 100%)`,
      padding: "8px 16px",
      borderRadius: "6px 6px 0 0",
    }}
  >
    <span
      style={{
        color: C.parchment,
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "0.12em",
      }}
    >
      {label}
    </span>
    {badge && (
      <span
        style={{
          backgroundColor: C.gold,
          color: C.espresso,
          padding: "2px 12px",
          borderRadius: "20px",
          fontSize: "11px",
          fontWeight: "700",
        }}
      >
        {badge}
      </span>
    )}
  </div>
);

const ScrunchieRow = ({ name, color, isLast, idx }: ScrunchieRowProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 16px",
      borderBottom: !isLast ? `1px solid ${C.parchment}` : "none",
      backgroundColor: idx % 2 === 0 ? C.ivory : "#FAF4E9",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          flexShrink: 0,
          backgroundColor: COLOR_DOTS[color] || "#aaa",
          border: "1.5px solid rgba(0,0,0,0.18)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3)",
        }}
      />
      <div>
        <p
          style={{
            margin: 0,
            color: C.espresso,
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          {name}
        </p>
        <p style={{ margin: "1px 0 0", color: C.lightUmber, fontSize: "11px" }}>
          {color}
        </p>
      </div>
    </div>
  </div>
);

const ItemRow = ({ name, detail, price, note, isLast, idx }: ItemRowProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 16px",
      borderBottom: !isLast ? `1px solid ${C.parchment}` : "none",
      backgroundColor: idx % 2 === 0 ? C.ivory : "#FAF4E9",
    }}
  >
    <div>
      <p
        style={{
          margin: 0,
          color: C.espresso,
          fontWeight: "600",
          fontSize: "13px",
        }}
      >
        {name}
      </p>
      {detail && (
        <p style={{ margin: "1px 0 0", color: C.lightUmber, fontSize: "11px" }}>
          {detail}
        </p>
      )}
    </div>
    {price && (
      <div style={{ textAlign: "right", paddingLeft: "10px", flexShrink: 0 }}>
        <span style={{ color: C.umber, fontWeight: "700", fontSize: "14px" }}>
          {price}
        </span>
        {note && (
          <p
            style={{ margin: "1px 0 0", color: C.lightUmber, fontSize: "10px" }}
          >
            {note}
          </p>
        )}
      </div>
    )}
  </div>
);

const ProductTable = ({ children }: ProductTableProps) => (
  <div
    style={{
      border: `1px solid #DDD0B8`,
      borderTop: "none",
      borderRadius: "0 0 8px 8px",
      overflow: "hidden",
      marginBottom: "10px",
    }}
  >
    {children}
  </div>
);

const CategoryHeading = ({ icon, title }: CategoryHeadingProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px",
      paddingBottom: "8px",
      borderBottom: `2px solid ${C.gold}`,
    }}
  >
    <span style={{ fontSize: "18px" }}>{icon}</span>
    <span
      style={{
        color: C.espresso,
        fontSize: "13px",
        fontWeight: "700",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      {title}
    </span>
  </div>
);

export default function PriceList() {
  const silkScrunchies = [
    { name: "Coco Scrunchie", color: "Chocolate Brown" },
    { name: "Rosey Scrunchie", color: "Baby Pink" },
  ];

  const crepeScrunchies = [
    { name: "Ocean Scrunchie", color: "Teal Blue" },
    { name: "Aqua Bloom Scrunchie", color: "Blue" },
    { name: "Midnight Scrunchie", color: "Black" },
    { name: "Berry Scrunchie", color: "Wine" },
    { name: "Ruby Scrunchie", color: "Red" },
    { name: "Pearl Scrunchie", color: "White" },
    { name: "Cloud Scrunchie", color: "Sky Blue" },
    { name: "Mist Scrunchie", color: "Baby Blue" },
    { name: "Check Print Scrunchie", color: "Navy Plaid" },
  ];

  const bowClips = [
    {
      name: "Check Print Bow Clip",
      detail: "Mini Size · Navy Plaid",
      price: "₹59",
      note: "per pair",
    },
    {
      name: "Coco Bow Clip",
      detail: "Medium · Chocolate Brown Satin",
      price: "₹49",
    },
    {
      name: "Ocean Bow Clip",
      detail: "Medium · Teal · Pearl Centre",
      price: "₹49",
    },
    {
      name: "Coco Long Bow",
      detail: "Ponytail Style · Brown Satin",
      price: "₹69",
    },
  ];

  const multiUtilityBags = [
    {
      name: "Neera Multi Utility Bag",
      detail: "Embroidered Navy Silk · Floral & Gold Thread",
    },
    {
      name: "Check Print Multi Utility Bag",
      detail: "Navy Plaid · Bow Accent",
    },
    {
      name: "Chumky / Sunehri Pouch",
      detail: "Yellow · Paisley Embroidery & Mirror Work",
    },
  ];

  const miniOrganisers = [
    {
      name: "Neera Mini Utility Organiser",
      detail: "Embroidered Navy Silk · Curved Compact",
    },
    {
      name: "Check Print Mini Utility Organiser",
      detail: "Navy Plaid · Curved Compact",
    },
  ];

  const priceRef = [
    ["Silk Scrunchies", "₹49 each"],
    ["Crepe Fabric Scrunchies", "₹39 each"],
    ["Mini Bow Clips", "₹59 / pair"],
    ["Medium Bow Clips", "₹49 each"],
    ["Long / Ponytail Bow", "₹69 each"],
    ["Mini Utility Organiser", "₹199 each"],
    ["Multi Utility Bag", "₹299 each"],
  ];

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        backgroundColor: C.ivory,
        minHeight: "100vh",
      }}
    >
      {/* ── Hero Header ── */}
      <div
        style={{
          background: `linear-gradient(150deg, ${C.espresso} 0%, ${C.sienna} 50%, ${C.espresso} 100%)`,
        }}
      >
        <TextilePattern />
        <div style={{ padding: "32px 24px 28px", textAlign: "center" }}>
          <p
            style={{
              color: C.gold,
              fontSize: "9px",
              letterSpacing: "0.55em",
              margin: "0 0 18px",
              textTransform: "uppercase",
            }}
          >
            ✦ Handcrafted with Love ✦
          </p>
          <p
            style={{
              color: "#FBF5EA",
              fontSize: "38px",
              fontWeight: "bold",
              letterSpacing: "0.28em",
              margin: "0",
              lineHeight: 1.1,
            }}
          >
            ANOKHI
          </p>
          <p
            style={{
              color: C.gold,
              fontSize: "38px",
              fontWeight: "bold",
              letterSpacing: "0.28em",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            LOOM
          </p>
          <p
            style={{
              color: "rgba(245,237,217,0.55)",
              fontSize: "9px",
              letterSpacing: "0.4em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Product Price List
          </p>
        </div>
        <TextilePattern />
      </div>

      {/* ── Main Content ── */}
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          padding: "26px 16px 44px",
        }}
      >
        {/* Scrunchies */}
        <div style={{ marginBottom: "30px" }}>
          <CategoryHeading icon="🪢" title="Scrunchies" />

          <SectionBand label="SILK SCRUNCHIES" badge="₹49 each" />
          <ProductTable>
            {silkScrunchies.map((item, i) => (
              <ScrunchieRow
                key={i}
                {...item}
                isLast={i === silkScrunchies.length - 1}
                idx={i}
              />
            ))}
          </ProductTable>

          <SectionBand label="CREPE FABRIC SCRUNCHIES" badge="₹39 each" />
          <ProductTable>
            {crepeScrunchies.map((item, i) => (
              <ScrunchieRow
                key={i}
                {...item}
                isLast={i === crepeScrunchies.length - 1}
                idx={i}
              />
            ))}
          </ProductTable>
        </div>

        {/* Bow Clips */}
        <div style={{ marginBottom: "30px" }}>
          <CategoryHeading icon="🎀" title="Bow Clips & Hair Bows" />
          <SectionBand label="BOW CLIPS" />
          <ProductTable>
            {bowClips.map((item, i) => (
              <ItemRow
                key={i}
                {...item}
                isLast={i === bowClips.length - 1}
                idx={i}
              />
            ))}
          </ProductTable>
        </div>

        {/* Bags & Pouches */}
        <div style={{ marginBottom: "30px" }}>
          <CategoryHeading icon="👜" title="Bags & Pouches" />

          <SectionBand label="MULTI UTILITY BAGS" badge="₹299 each" />
          <ProductTable>
            {multiUtilityBags.map((item, i) => (
              <ItemRow
                key={i}
                {...item}
                isLast={i === multiUtilityBags.length - 1}
                idx={i}
              />
            ))}
          </ProductTable>

          <SectionBand label="MINI UTILITY ORGANISERS" badge="₹199 each" />
          <ProductTable>
            {miniOrganisers.map((item, i) => (
              <ItemRow
                key={i}
                {...item}
                isLast={i === miniOrganisers.length - 1}
                idx={i}
              />
            ))}
          </ProductTable>
        </div>

        {/* Quick Reference Card */}
        <div
          style={{
            background: `linear-gradient(135deg, ${C.espresso} 0%, ${C.sienna} 100%)`,
            borderRadius: "10px",
            padding: "18px 16px",
            marginBottom: "32px",
            border: `1px solid ${C.umber}`,
          }}
        >
          <p
            style={{
              color: C.gold,
              fontSize: "10px",
              letterSpacing: "0.3em",
              textAlign: "center",
              margin: "0 0 14px",
              fontWeight: "700",
            }}
          >
            ✦ QUICK PRICE REFERENCE ✦
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {priceRef.map(([label, price], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(191,134,64,0.11)",
                  padding: "7px 12px",
                  borderRadius: "5px",
                }}
              >
                <span style={{ color: "#E8D5B7", fontSize: "11px" }}>
                  {label}
                </span>
                <span
                  style={{ color: C.gold, fontWeight: "700", fontSize: "12px" }}
                >
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{ height: "1px", width: "60px", backgroundColor: C.gold }}
            />
            <span style={{ color: C.gold, fontSize: "14px" }}>✦</span>
            <div
              style={{ height: "1px", width: "60px", backgroundColor: C.gold }}
            />
          </div>
          <p
            style={{
              color: C.lightUmber,
              fontSize: "10px",
              letterSpacing: "0.22em",
              margin: "0 0 4px",
            }}
          >
            ALL ITEMS HANDCRAFTED WITH CARE
          </p>
          <p
            style={{
              color: C.espresso,
              fontSize: "14px",
              fontWeight: "700",
              margin: 0,
              letterSpacing: "0.14em",
            }}
          >
            ANOKHI LOOM
          </p>
        </div>
      </div>
    </div>
  );
}
