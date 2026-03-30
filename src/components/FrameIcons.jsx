/* Real SVG logos for window frames */

/* LeetCode — proper bracket + L mark */
export function LeetCodeLogo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.7 34.3c0.8 0.8 0.8 2 0 2.8l-4.7 4.8c-0.8 0.8-2 0.8-2.8 0l-15-15c-0.8-0.8-0.8-2 0-2.8l15-15c0.8-0.8 2-0.8 2.8 0l4.7 4.7c0.8 0.8 0.8 2 0 2.8l-10.3 10.3 10.3 7.4z"
        fill="#FFA116"/>
      <rect x="12" y="23" width="26" height="4" rx="2" fill="#B3B3B3"/>
    </svg>
  )
}

/* GitHub — official octocat mark */
export function GitHubLogo({ size = 44, color = '#B0E4CC' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69
           2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127
           -13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17
           -4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052
           4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6
           -10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2
           -.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052
           a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63
           9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038
           3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283
           1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526
           0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691
           C97.707 22 75.788 0 48.854 0z"
        fill={color}
      />
    </svg>
  )
}

/* Internship stamp — red seal style matching the reference image */
export function InternshipStamp({ size = 52 }) {
  const cx = 50, cy = 50, r1 = 46, r2 = 38
  /* 5 stars evenly around the outer ring */
  const stars = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 72 - 90) * Math.PI / 180
    return {
      x: cx + (r1 - 6) * Math.cos(angle),
      y: cy + (r1 - 6) * Math.sin(angle),
    }
  })

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* outer dashed ring */}
      <circle cx={cx} cy={cy} r={r1} stroke="#C0392B" strokeWidth="3.5"
        strokeDasharray="6 3" fill="none"/>
      {/* inner solid ring */}
      <circle cx={cx} cy={cy} r={r2} stroke="#C0392B" strokeWidth="2" fill="none"/>
      {/* stars */}
      {stars.map((s, i) => (
        <text key={i} x={s.x} y={s.y} textAnchor="middle" dominantBaseline="central"
          fontSize="8" fill="#C0392B">★</text>
      ))}
      {/* INTERNSHIP text */}
      <path id="arc" d={`M ${cx-28},${cy} A 28,28 0 0,1 ${cx+28},${cy}`} fill="none"/>
      <text fontSize="9" fontWeight="700" fill="#C0392B" letterSpacing="1.5"
        fontFamily="sans-serif">
        <textPath href="#arc" startOffset="8%">INTERNSHIP</textPath>
      </text>
      {/* briefcase */}
      <rect x="30" y="52" width="40" height="26" rx="4" stroke="#C0392B" strokeWidth="2.5" fill="none"/>
      <path d="M40 52 L40 47 C40 45.3 41.3 44 43 44 L57 44 C58.7 44 60 45.3 60 47 L60 52"
        stroke="#C0392B" strokeWidth="2.5" fill="none"/>
      <line x1="30" y1="63" x2="70" y2="63" stroke="#C0392B" strokeWidth="1.8"/>
      <rect x="44" y="60" width="12" height="7" rx="1.5" stroke="#C0392B" strokeWidth="1.8" fill="none"/>
    </svg>
  )
}
