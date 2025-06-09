// src/ArticleDetails.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import NewsCardSkeleton from "./NewsCardSkeleton";

const dummyMarkdown = `
## The Future of Clean Energy: 5 Trends to Watch 🔋⚡

**Last updated:** June 10 2025 • *6 min read*

---

#### 1. Grid-scale batteries are finally affordable

A decade ago, storing one kilowatt-hour of electricity cost \\$1,100.  
By 2024 it slipped under \\$120, and BloombergNEF expects \\$62 by 2027.

\`\`\`text
Year   | Cost (USD / kWh)
-------|-----------------
2015   | 1 100
2020   |   381
2024   |   119
2027*  |    62  (*proj.)
\`\`\`

That price curve **unlocks 24 × 7 renewables** for midsize cities.

#### 2. Solar inks are moving from lab to fab

* Perovskite/Si tandems hit 33.9 % efficiency in January 2025.  
* Roll-to-roll printing slashes module CAPEX 70 %.

> “Think of it as Gutenberg for photovoltaics,” says Dr Aisha Mehta.

#### 3. Green hydrogen shifts from hype to hardware

Europe commissioned **12 GW** of electrolyzers in Q1 2025 alone.  
The first ammonia-fuelled container ship leaves dry-dock this fall.

#### 4. Software eats the power plant

AI-driven predictive dispatch shaves **18 %** off balancing costs in Texas.  
Open-source tools such as [GridStudio](https://github.com/gridstudio) make it trivial to run Monte Carlo scenarios.

#### 5. The policy flywheel keeps spinning

| Region | Key 2025 law | Expected impact |
|--------|--------------|-----------------|
| 🇪🇺 EU  | Net-Zero Industry Act | €210 B cleantech CAPEX |
| 🇺🇸 US  | IRA Addendum 2025    | 45 % ITC for long-duration storage |
| 🇮🇳 IN  | PM-Solar Mission III | 40 GW rooftop solar by 2028 |

---

### Bottom line

> The clean-energy story is no longer *if* or *when*—it’s **how fast**.  
> Buckle up.

*Written by NewZera staff. Free to republish with attribution.*
`;

export default function ArticleDetails() {
  const location = useLocation();
  const { article } = location.state || {};

  // Use API content if it exists and is reasonably long; otherwise dummy
  const markdown =
    article?.content && article.content.length > 120
      ? article.content
      : dummyMarkdown;

  return (
    <Container maxWidth="md" sx={{ mt: 4, bgcolor: "#F7F7F7", p: 3 }}>
      {!article && <NewsCardSkeleton />}

      {article && (
        <Card
          sx={{
            borderRadius: 10,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <CardContent>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", fontFamily: "Georgia, serif" }}
            >
              {article.title ?? "Untitled"}
            </Typography>

            {article.pubDate && (
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 2, fontFamily: "Georgia, serif" }}
              >
                {new Date(article.pubDate).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                {article.source ? ` / ${article.source}` : ""}
              </Typography>
            )}

            {article.image_url && (
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <CardMedia
                  component="img"
                  image={article.image_url}
                  alt={article.title}
                  sx={{ maxHeight: 320, borderRadius: 3, mx: "auto" }}
                />
              </Box>
            )}

            <Divider sx={{ mb: 4 }} />

            {/* MARKDOWN RENDER */}
            <Grid container>
              <Grid item xs={12}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ node, ...props }) => (
                      <Typography
                        variant="h4"
                        sx={{ mt: 4, mb: 2, fontWeight: 600 }}
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <Typography
                        variant="h5"
                        sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <Typography
                        variant="body1"
                        sx={{ mb: 2, lineHeight: 1.7 }}
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li>
                        <Typography
                          component="span"
                          variant="body1"
                          sx={{ lineHeight: 1.7 }}
                          {...props}
                        />
                      </li>
                    ),
                    code: ({ node, inline, ...props }) => (
                      <Typography
                        component="code"
                        sx={{
                          bgcolor: "#eee",
                          px: 0.7,
                          py: 0.2,
                          borderRadius: 1,
                          fontFamily: "monospace",
                          fontSize: "0.9rem",
                        }}
                        {...props}
                      />
                    ),
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
