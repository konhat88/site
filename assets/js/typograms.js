function grid(t,e){const n=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","line");s.setAttribute("x1",15),s.setAttribute("y1",0),s.setAttribute("x2",15),s.setAttribute("y2",54),s.setAttribute("class","center");const r=document.createElementNS("http://www.w3.org/2000/svg","line");r.setAttribute("x1",0),r.setAttribute("y1",30),r.setAttribute("x2",30),r.setAttribute("y2",54),r.setAttribute("class","center");for(let s=0;s<=30*t;s+=3){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",s),t.setAttribute("y1",0),t.setAttribute("x2",s),t.setAttribute("y2",54*e),t.setAttribute("class","grid"),n.appendChild(t)}for(let s=0;s<=54*e;s+=3){const e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",s),e.setAttribute("x2",30*t),e.setAttribute("y2",s),e.setAttribute("class","grid"),n.appendChild(e)}return n}function cross([t,e,n,s,r,i,o,c]){const p=document.createElementNS("http://www.w3.org/2000/svg","g");if(t){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",15),t.setAttribute("y1",0),t.setAttribute("x2",15),t.setAttribute("y2",27),t.setAttribute("class","part"),p.appendChild(t)}if(e){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",15),t.setAttribute("y1",27),t.setAttribute("x2",30),t.setAttribute("y2",27),t.setAttribute("class","part"),p.appendChild(t)}if(n){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",15),t.setAttribute("y1",27),t.setAttribute("x2",15),t.setAttribute("y2",54),t.setAttribute("class","part"),p.appendChild(t)}if(s){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",0),t.setAttribute("y1",27),t.setAttribute("x2",15),t.setAttribute("y2",27),t.setAttribute("class","part"),p.appendChild(t)}if(document.createElementNS("http://www.w3.org/2000/svg","polygon").setAttribute("points",[[0,0],[20.6,0],[20.6,3],[0,3]].map(([t,e])=>`${t},${e}`).join(" ")),r){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",30),t.setAttribute("y1",0),t.setAttribute("x2",15),t.setAttribute("y2",27),t.setAttribute("class","part"),p.appendChild(t)}if(i){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",15),t.setAttribute("y1",27),t.setAttribute("x2",30),t.setAttribute("y2",54),t.setAttribute("class","part"),p.appendChild(t)}if(o){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",15),t.setAttribute("y1",27),t.setAttribute("x2",0),t.setAttribute("y2",54),t.setAttribute("class","part"),p.appendChild(t)}if(c){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",0),t.setAttribute("y1",0),t.setAttribute("x2",15),t.setAttribute("y2",27),t.setAttribute("class","part"),p.appendChild(t)}return p}function text(t,e){const n=document.createElementNS("http://www.w3.org/2000/svg","g"),s=document.createElementNS("http://www.w3.org/2000/svg","text"),r=document.createTextNode(t);s.appendChild(r),e&&s.setAttribute("class","reserved");const i=[[15,24]];return s.setAttribute("transform",i.map(([t,e])=>`translate(${t}, ${e})`).join(" ")),n.appendChild(s),n}function render(t){const e=document.createElementNS("http://www.w3.org/2000/svg","g");for(let n=0;n<t.length;n++)for(let s=0;s<t[n].length;s++){const r=t[n][s];if(" "==r||'"'==r)continue;let i=glyphs[r];const o=document.createElementNS("http://www.w3.org/2000/svg","g");let c=!1;for(let e=0;e<s;e++)'"'==t[n][e]&&(c=!c);const p=around(t,[s,n]);if(r.match(/[A-Za-z0-9]/)){const[,t,,e]=p;c=c||e.match(/[A-Za-uw-z0-9]/)||t.match(/[A-Za-uw-z0-9]/)}i=i&&!c,i&&o.appendChild(glyphs[r](p)),o.appendChild(text(r,i)),o.setAttribute("transform",`translate(${30*s} ${54*n})`),e.appendChild(o)}return e}function create(t,e,n){const s=t.split("\n").map(t=>t.trimEnd().split(""));s.shift(),s.splice(-1);let r=0;const i=s.length;for(let t=0;t<s.length;t++)for(let e=0;e<s[t].length;e++)s[t].length>r&&(r=s[e].length);var o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width",30*r*e),o.setAttribute("height",54*i*e),o.setAttribute("debug",n);const c=0;return o.setAttribute("viewBox",`${-c} ${-c} ${30*r+2*c} ${54*i+2*c}`),o.setAttribute("class","debug"),o.appendChild(render(s)),n&&o.appendChild(grid(r,i)),o}function around(t,[e,n]){let s=" ",r=" ",i=" ",o=" ",c=" ",p=" ",l=" ",u=" ";return n>0&&(r=t[n-1][e]||" "),e<t[n].length-1&&(i=t[n][e+1]||" "),n<t.length-1&&(o=t[n+1][e]||" "),e>0&&(s=t[n][e-1]||" "),n>0&&e<t[n-1].length-1&&(c=t[n-1][e+1]||" "),n+1<t.length&&e<t[n+1].length&&(p=t[n+1][e+1]||" "),n<t.length-1&&e>0&&(l=t[n+1][e-1]||" "),n>0&&e>0&&(u=t[n-1][e-1]||" "),[r,i,o,s,c,p,l,u]}const ratio=2,glyphs={"|":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g");if("_"==e){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","18"),t.setAttribute("y1","51"),t.setAttribute("x2","30"),t.setAttribute("y2","51"),t.setAttribute("class","part"),p.appendChild(t)}if("_"==s){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","51"),t.setAttribute("x2","12"),t.setAttribute("y2","51"),t.setAttribute("class","part"),p.appendChild(t)}if("_"==r){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","12"),t.setAttribute("y1","-3"),t.setAttribute("x2","30"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),p.appendChild(t)}if("_"==c){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","-3"),t.setAttribute("x2","18"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),p.appendChild(t)}return p.appendChild(cross([!("/"==r&&"\\"==c),["-"].includes(e),!("/"==o&&"\\"==i),["-"].includes(s),"/"==r,"\\"==i,"/"==o,"\\"==c])),p},"-":([t,e,n,s,r,i,o,c])=>cross([["|"].includes(t),!0,["|"].includes(n),!0,!1,!1,!1,!1]),"~":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","line");return l.setAttribute("x1","9"),l.setAttribute("y1","27"),l.setAttribute("x2","24"),l.setAttribute("y2","27"),l.setAttribute("class","part"),p.appendChild(l),p},_:t=>{const e=glyphs["-"](t);return e.setAttribute("transform","translate(0 24)"),e},":":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","line");if(l.setAttribute("x1","15"),l.setAttribute("y1","0"),l.setAttribute("x2","15"),l.setAttribute("y2","60"),l.setAttribute("class","part"),l.setAttribute("style","stroke-dasharray: 15; stroke-dashoffset: 0;"),p.appendChild(l),"+"==t){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","15"),t.setAttribute("y1","-24"),t.setAttribute("x2","15"),t.setAttribute("y2","-15"),t.setAttribute("class","part"),p.appendChild(t)}if("+"==n){const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","15"),t.setAttribute("y1","60"),t.setAttribute("x2","15"),t.setAttribute("y2","78"),t.setAttribute("class","part"),p.appendChild(t)}return p},"=":()=>{const t=document.createElementNS("http://www.w3.org/2000/svg","g"),e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","0"),e.setAttribute("y1","21"),e.setAttribute("x2","30"),e.setAttribute("y2","21"),e.setAttribute("class","part"),t.appendChild(e);const n=document.createElementNS("http://www.w3.org/2000/svg","line");return n.setAttribute("x1","0"),n.setAttribute("y1","30"),n.setAttribute("x2","30"),n.setAttribute("y2","30"),n.setAttribute("class","part"),t.appendChild(n),t},"*":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","circle");return l.setAttribute("cx","0"),l.setAttribute("cy","0"),l.setAttribute("r","21"),l.setAttribute("stroke","none"),l.setAttribute("transform","translate(15, 27)"),p.appendChild(l),p.appendChild(cross([["+","|"].includes(t),["+","-"].includes(e),["+","|"].includes(n),["+","-"].includes(s),["/"].includes(r),["\\"].includes(i),["/"].includes(o),["\\"].includes(c)])),p},o:([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","circle");l.setAttribute("cx","0"),l.setAttribute("cy","0"),l.setAttribute("r","18"),l.setAttribute("stroke-width","6"),l.setAttribute("fill","none"),l.setAttribute("stroke","var(--global-text-color)"),l.setAttribute("transform","translate(15, 27)"),p.appendChild(l);const u=cross([["+","|"].includes(t),["+","-"].includes(e),["+","|"].includes(n),["+","-"].includes(s),["/"].includes(r),["\\"].includes(i),["/"].includes(o),["\\"].includes(c)]);p.appendChild(u);const a=document.createElementNS("http://www.w3.org/2000/svg","circle");return a.setAttribute("cx","0"),a.setAttribute("cy","0"),a.setAttribute("r","15"),a.setAttribute("fill","white"),a.setAttribute("opacity","100%"),a.setAttribute("transform","translate(15, 27)"),p.appendChild(a),p},"/":t=>{const[e,n,s,r,i,o,c,p]=t,l=document.createElementNS("http://www.w3.org/2000/svg","g");if(l.appendChild(cross([["|"].includes(e),!1,["|"].includes(s),!1,!0,!1,!0,!1])),"\\"==n){const t=cross([!1,!1,!1,!1,!1,!1,!0,!1]);t.setAttribute("transform","translate(30 -54)"),t.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),l.appendChild(t)}if("\\"==r){const t=cross([!1,!1,!1,!1,!0,!1,!1,!1]);t.setAttribute("transform","translate(-30 54)"),t.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),l.appendChild(t)}if("_"==n){const e=glyphs._(t);l.appendChild(e)}return l},"\\":t=>{const[e,n,s,r,i,o,c,p]=t,l=document.createElementNS("http://www.w3.org/2000/svg","g");if(l.appendChild(cross([["|"].includes(e),!1,["|"].includes(s),!1,!1,!0,!1,!0])),"/"==r){const t=cross([!1,!1,!1,!1,!1,!0,!1,!1]);t.setAttribute("transform","translate(-30 -54)"),t.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),l.appendChild(t)}if("/"==n){const t=cross([!1,!1,!1,!1,!1,!1,!1,!0]);t.setAttribute("transform","translate(30 54)"),t.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),l.appendChild(t)}if("_"==r){const e=glyphs._(t);l.appendChild(e)}return l},"#":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","polygon"),u=[[0,0],[42,0],[42,42],[0,42]];return l.setAttribute("points",u.map(([t,e])=>`${t},${e}`).join(" ")),l.setAttribute("transform","translate(-6, 6)"),p.appendChild(l),p.appendChild(cross([["+","|"].includes(t),["+","-"].includes(e),["+","|"].includes(n),["+","-"].includes(s),["/"].includes(r),["\\"].includes(i),["/"].includes(o),["\\"].includes(c)])),p},"+":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=["*","#","-","+","~",">",".","'","`"].includes(e),u=["*","#","-","+","~","<",".","'","`"].includes(s),a=["*","#","|","+",".","`","^"].includes(t),d=["*","#","|","+","'","`","v"].includes(n),w=["/","*","#"].includes(r),A=["\\","*","#"].includes(i),h=["\\","*","#"].includes(c),g=["/","*","#"].includes(o);if(p.appendChild(cross([a,l,d,u,w,A,g,h])),(u||l)&&(d||a)){const t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 6,0 6,6 0,6"),t.setAttribute("transform","translate(-3 -3) translate(15 27)"),p.appendChild(t)}if(w||h){const t=cross([!1,!1,!1,!1,!1,h,w,!1]);t.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),p.appendChild(t)}if(A||g){const t=cross([!1,!1,!1,!1,g,!1,!1,A]);t.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),p.appendChild(t)}if(g||h){const t=cross([!1,!1,!1,!1,g&&A,h&&w,!1,!1]);t.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),p.appendChild(t)}if(A||w){const t=cross([!1,!1,!1,!1,!1,!1,w&&h,A&&g]);t.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),p.appendChild(t)}if(l||u){const t=cross([!1,!1,!1,!1,l||g,h,w,u||A]);t.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),p.appendChild(t)}return p},".":([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g");if(!("-"!=e&&"+"!=e||"|"!=n&&"'"!=n&&"`"!=n&&"+"!=n)){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 30 24\n        A 18 18, 0, 0, 0, 12 42\n        L 12 54\n        L 18 54\n        L 18 42\n        A 12 12, 0, 0, 1, 30 30\n        Z"),p.appendChild(t)}if(!("-"!=s&&"+"!=s||"|"!=n&&"'"!=n&&"`"!=n&&"+"!=n)){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 24\n        A 18 18, 0, 0, 1, 18 42\n        L 18 54\n        L 12 54\n        L 12 42\n        A 12 12, 0, 0, 0, 0 30\n        Z"),p.appendChild(t)}if(!("-"!=e&&"+"!=e||"|"!=t&&"."!=t&&"+"!=t)){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 30 30\n        A 18 18, 0, 0, 1, 12 12\n        L 12 0\n        L 18 0\n        L 18 12\n        A 12 12, 0, 0, 0, 30 24\n        Z"),p.appendChild(t)}if(!("-"!=s&&"+"!=s||"|"!=t&&"."!=t&&"+"!=t)){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 30\n        A 18 18, 0, 0, 0, 18 12\n        L 18 0\n        L 12 0\n        L 12 12\n        A 12 12, 0, 0, 1, 0 24\n        Z"),p.appendChild(t)}if("-"==e&&"/"==r){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 30 30\n        A 12 12, 0, 0, 1, 18 18\n        L 18 15\n        L 24 15\n        L 24 18\n        A 6 6, 0, 0, 0, 30 24\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),p.appendChild(e)}if("-"==e&&"\\"==c){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M -3 0\n        A 60 60, 0, 0, 0, 30 30\n        L 30 24\n        A 60 60, 0, 0, 1, 0 -6\n        Z"),p.appendChild(t)}if("-"==s&&"/"==r){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 30\n        A 60 60, 0, 0, 0, 33 0\n        L 30 -6\n        A 60 60, 0, 0, 1, 0 24\n        Z"),p.appendChild(t)}if("-"==s&&"\\"==c){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 30\n        A 12 12, 0, 0, 0, 12 18\n        L 12 15\n        L 6 15\n        L 6 18\n        A 6 6, 0, 0, 1, 0 24\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),p.appendChild(e)}if("|"==n&&"/"==r){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 12 54\n        A 120 120, 0, 0, 1, 30 -6\n        L 37 -6\n        A 120 120, 0, 0, 0, 18 54\n        Z"),p.appendChild(t)}if("|"==t&&"\\"==i){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 30 60\n        A 120 120, 0, 0, 1, 12 0\n        L 18 0\n        A 120 120, 0, 0, 0, 37 60\n        Z"),p.appendChild(t)}if("|"==t&&"/"==o){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 60\n        A 120 120, 0, 0, 0, 18 0\n        L 12 0\n        A 120 120, 0, 0, 1, -7 60\n        Z"),p.appendChild(t)}if("|"==n&&"\\"==c){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 12 54\n        A 120 120, 0, 0, 0, -7 -6\n        L 0 -6\n        A 120 120, 0, 0, 1, 18 54\n        Z"),p.appendChild(t)}if("-"==e&&"/"==o){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 48\n        A 42 42, 0, 0, 1, 30 24\n        L 30 30\n        A 42 42, 0, 0, 0, 6 48\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 15, 12 15, 12 30, -3 30)"),p.appendChild(e)}if("-"==s&&"\\"==i){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 24\n        A 42 42, 0, 0, 1, 30 48\n        L 24 48\n        A 42 42, 0, 0, 0, 0 30\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("clip-path","polygon(-3 15, 12 15, 21 30, -3 30)"),p.appendChild(e)}if("-"==s&&"/"==o){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 0 24\n        A 12 12, 0, 0, 1, 12 39\n        L 6 39\n        A 6 6, 0, 0, 0, 0 30\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),p.appendChild(e)}if("-"==e&&"\\"==i){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 30 24\n        A 12 12, 0, 0, 0, 18 39\n        L 24 39\n        A 6 6, 0, 0, 1, 30 30\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("clip-path","polygon(3 6, 18 6, 18 30, 3 30)"),p.appendChild(e)}if("/"==o&&"\\"==i){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 3 42\n        A 15 15, 0, 0, 1, 27 42\n        L 25 51\n        A 9 9, 0, 0, 0, 5 51\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!0,!0,!1]);e.setAttribute("clip-path","polygon(-3 15, 33 15, 33 30, -3 30)"),p.appendChild(e)}if("\\"==c&&"/"==r){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 3 12\n        A 15 15, 0, 0, 0, 27 12\n        L 22 9\n        A 9 9, 0, 0, 1, 8 9\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!0,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 33 -3, 33 12, -3 12)"),p.appendChild(e)}if("/"==r&&"\\"==i){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 22 9\n        A 30 30, 0, 0, 0, 22 45\n        L 28 45\n        A 30 30, 0, 0, 1, 28 9\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!0,!0,!1,!1]);e.setAttribute("clip-path","polygon(6 -3, 33 -3, 33 57, 6 57)"),p.appendChild(e)}if("\\"==c&&"/"==o){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","\n        M 8 9\n        A 30 30, 0, 0, 1, 8 45\n        L 2 45\n        A 30 30, 0, 0, 0, 2 9\n        Z"),p.appendChild(t);const e=cross([!1,!1,!1,!1,!1,!1,!0,!0]);e.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),p.appendChild(e)}return p}},alias={"\u250c":"+","\u2510":"+","\u2514":"+","\u2518":"+","\u2500":"-","\u25ba":">","'":".","`":".",V:"v"};for(const[t,e]of Object.entries(alias))glyphs[t]=t=>glyphs[e](t);glyphs[">"]=([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points","0,0 42,18 0,36");let u=0;return"*"!=e&&"o"!=e&&"#"!=e||(u-=18),l.setAttribute("transform",`translate(${u} 9)`),p.appendChild(l),p},glyphs["<"]=([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points","0,0 42,18 0,36");let u=30;return"*"!=s&&"o"!=s&&"#"!=s||(u+=18),l.setAttribute("transform",`translate(${u} 9) translate(0 36) rotate(180)`),p.appendChild(l),p},glyphs.v=([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points","0,0 42,18 0,36");let u=36;return" "==n?u=12:"_"==n?u+=18:"*"!=n&&"o"!=n&&"#"!=n||(u-=18),"/"==r?l.setAttribute("transform","translate(-36 33) rotate(112.5, 42, 18)"):"\\"==c?l.setAttribute("transform","translate(-18 33) rotate(67.5, 42, 18)"):l.setAttribute("transform",`translate(33 ${u}) rotate(90)`),p.appendChild(l),p.appendChild(cross([["|","+"].includes(t),!1,["|","+"].includes(t),!1,["/"].includes(r),!1,!1,["\\"].includes(c)])),p},glyphs["^"]=([t,e,n,s,r,i,o,c])=>{const p=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points","0,0 42,18 0,36");let u=42;return"-"==t&&(u-=15),"/"==o?l.setAttribute("transform","translate(-18 -15) rotate(-67.5, 42, 18)"):"\\"==i?l.setAttribute("transform","translate(-36 -15) rotate(-112.5, 42, 18)"):l.setAttribute("transform",`translate(-3 ${u}) rotate(-90)`),p.appendChild(l),p.appendChild(cross([!1,!1,["+","|"].includes(n),!1,!1,["\\"].includes(i),["/"].includes(o),!1])),p},document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&document.querySelectorAll("pre>code.language-typograms").forEach(t=>{const e=t.textContent,n=t.parentElement.parentElement;let s=document.createElement("pre");s.classList.add("typogram");const r=create("\n"+e,.3,!1);s.appendChild(r),n.appendChild(s),n.removeChild(t.parentElement)})});