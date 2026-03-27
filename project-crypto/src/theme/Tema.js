import { createSystem, defaultConfig } from "@chakra-ui/react";

export const tema = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `Ubuntu` },
        body: { value: "Ubuntu" },
      },
      colors: {
        brand: {
         gold: { value: "#F5A623" },
         darkGold: { value: "#D48C1C" },
         bg: { value: "#0F0F10" },
         cardBg: { value: "#1A1A1B"}
      },
      text: {
          primary: { value: "#FFFFFF" },
          secondary: { value: "#A0AEC0" },
        }
      },
    },
    textStyles: {
        h1: {
          value: {
            fontSize: {
            base: "30px",
            md: "32px",
          },
          color: "text.primary",
          lineHeight: "1.2",
        },
      },

      h2: {
          value: {
            fontSize: {
            base: "24px",
            md: "28px",
          },
          color: "text.primary",
          lineHeight: "1.2",
        },
      },

      h3: {
          value: {
            fontSize: {
            base: "22px",
            md: "24px",
            xl: "32px",
          },
          color: "text.primary",
          lineHeight: "1.2",
        },
      },

      h4: {
          value: {
            fontSize: {
            base: "20px",
            md: "22px",
          },
          color: "text.primary",
          lineHeight: "1.2",
        },
      },

      h5: {
          value: {
            fontSize: {
            base: "16px",
            md: "18px",
          },
          color: "brand.gold",
          lineHeight: "1.2",
        },
      },

      h6: {
          value: {
            fontSize: {
            base: "14px",
            md: "16px",
          },
        //  color: "brand.gold",
          lineHeight: "1.2",
        },
      },
    },

    fontSizes: {
      xs: { value: ".75rem" },        
      sm: { value: ".875rem" },
      base: { value: { base: "1rem", md: "1.125rem" } },
      lg: { value: { base: "1.125rem", md: "1.25rem" } },
      xl: { value: { base: "1.25rem", md: "1.375rem" } },
      "2xl": { value: { base: "1.375rem", md: "1.5rem" } },
      "3xl": { value: { base: "1.5rem", md: "1.75rem" } },
      "4xl": { value: { base: "1.875rem", md: "2rem" } },
    },

    slotRecipes: {
    card: {
      slots: ["root", "header", "body", "footer"],
      variants: {
        variant: {
          dashboard: {
            root: {
              bg: "brand.cardBg",
              borderRadius: "xl",
              border: "1px solid",
              borderColor: "whiteAlpha.200",
              p: "6",
              width: "full",
            },
          },
        },
      },
    },
   },
  },
  globalCss: {
    body: {
      bg: "brand.bg",
      color: "text.primary",
     },
   },
});

