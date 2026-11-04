<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | QukTik</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #0f172a;
            background: #f8fafc;
            margin: 0;
            padding: 30px 20px;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            padding: 24px 30px;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #ffffff;
          }
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 24px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .header p {
            margin: 0;
            font-size: 14px;
            color: #94a3b8;
          }
          .stats {
            padding: 14px 30px;
            background: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
            font-size: 13px;
            color: #475569;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
          }
          th {
            background: #f8fafc;
            text-align: left;
            padding: 12px 20px;
            font-weight: 600;
            color: #64748b;
            border-bottom: 1px solid #e2e8f0;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.05em;
          }
          td {
            padding: 12px 20px;
            border-bottom: 1px solid #f1f5f9;
          }
          tr:hover td {
            background: #f8fafc;
          }
          a {
            color: #e11d48;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            font-size: 11px;
            font-weight: 600;
            border-radius: 9999px;
            background: #e0f2fe;
            color: #0369a1;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>QukTik XML Sitemap</h1>
            <p>Generated for Google, Bing, and search engine indexation. Contains 125 canonical URLs and multilingual hreflang alternates.</p>
          </div>
          <div class="stats">
            Total URLs in Sitemap: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 50px;">#</th>
                <th>URL (loc)</th>
                <th style="width: 160px; text-align: center;">Multilingual Hreflang</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td style="color: #94a3b8; font-size: 12px;"><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td style="text-align: center;">
                    <xsl:choose>
                      <xsl:when test="count(xhtml:link) &gt; 0">
                        <span class="badge"><xsl:value-of select="count(xhtml:link)"/> Languages</span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span style="color: #94a3b8; font-size: 12px;">Canonical</span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
