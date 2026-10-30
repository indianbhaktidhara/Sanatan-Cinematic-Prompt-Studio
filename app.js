
const DEST = {
"Golden Temple — Amritsar":"Sri Harmandir Sahib, Amritsar; sacred sarovar; gilded architecture; Sikh heritage; authentic pilgrimage environment",
"Takht Sri Patna Sahib — Patna":"Takht Sri Patna Sahib; Sikh pilgrimage architecture; Patna heritage context",
"Gurudwara Bangla Sahib — Delhi":"Gurudwara Bangla Sahib; Delhi Sikh heritage; sacred sarovar; urban pilgrimage setting",
"Jagannath Temple — Puri":"Jagannath Temple, Puri; Kalinga architecture; Odisha coastal atmosphere; sacred pilgrimage environment",
"Ram Mandir — Ayodhya":"Ram Mandir, Ayodhya; monumental contemporary temple architecture; Saryu cultural landscape",
"Hanuman Garhi — Ayodhya":"Hanuman Garhi, Ayodhya; historic hilltop Hanuman shrine; Ramayana pilgrimage context",
"Mahakaleshwar — Ujjain":"Mahakaleshwar Temple, Ujjain; Shaiva pilgrimage; historic Ujjain and Shipra atmosphere",
"Kashi Vishwanath — Varanasi":"Kashi Vishwanath; Varanasi sacred cityscape; Ganga ghats; dense historic urban layers",

"Dwarkadhish Temple — Dwarka":"Dwarkadhish Temple; Dwarka; Gomti Ghat; Arabian Sea atmosphere; Krishna pilgrimage",
"Omkareshwar — Madhya Pradesh":"Omkareshwar Jyotirlinga; Mandhata island; Narmada River; sacred ghats; temple architecture; pilgrimage geography",
"Banke Bihari Temple — Vrindavan":"Banke Bihari Temple; Braj devotional atmosphere; Vrindavan lanes and pilgrimage culture",
"Prem Mandir — Vrindavan":"Prem Mandir; Vrindavan; landscaped devotional environment; detailed marble architecture",
"Shri Krishna Janmabhoomi — Mathura":"Krishna Janmabhoomi; Mathura; Braj cultural landscape and pilgrimage context",
"Chitrakoot — Madhya Pradesh/Uttar Pradesh":"Chitrakoot; Mandakini; forested Ramayana landscape; pilgrimage geography",
"Maa Sharda Devi — Maihar":"Maa Sharda Devi Temple, Maihar; Trikuta hill environment; pilgrimage ascent",
"Janaki Mandir — Janakpur":"Janaki Mandir, Janakpur; Mithila cultural setting; Ram-Sita heritage",
"Janaki Temple — Sitamarhi":"Janaki Temple, Sitamarhi; Mithila landscape; Ram-Sita heritage",
"Khajuraho Temples — Madhya Pradesh":"Khajuraho temple complex; Chandela-era sandstone architecture; archaeological environment",
"Konark Sun Temple — Odisha":"Konark Sun Temple; Kalinga architecture; archaeological coastal landscape"
,
"Somnath — Gujarat":"Somnath Jyotirlinga; Prabhas Patan; Arabian Sea coast; Chalukya-inspired temple silhouette; pilgrimage setting",
"Mallikarjuna — Srisailam":"Mallikarjuna Jyotirlinga; Srisailam; Nallamala hills; Krishna River landscape; Dravidian temple context",
"Kedarnath — Uttarakhand":"Kedarnath Temple; Garhwal Himalaya; high-altitude stone shrine; Mandakini valley; alpine pilgrimage setting",
"Bhimashankar — Maharashtra":"Bhimashankar Temple; Sahyadri forest; basalt and dark stone; Western Ghats landscape; pilgrimage trail",
"Trimbakeshwar — Nashik":"Trimbakeshwar Jyotirlinga; Brahmagiri foothills; Nashik; black stone temple; Godavari source landscape",
"Vaidyanath — Deoghar":"Baidyanath Dham, Deoghar; historic temple complex; Jharkhand pilgrimage city; shikhara and courtyard context",
"Nageshwar — Dwarka":"Nageshwar Jyotirlinga near Dwarka; Gujarat coastal pilgrimage landscape; temple complex; open sky and regional setting",
"Rameshwaram — Tamil Nadu":"Ramanathaswamy Temple, Rameswaram; long pillared corridors; sacred wells; Tamil Dravidian architecture; coastal island setting",
"Grishneshwar — Ellora":"Grishneshwar Jyotirlinga near Ellora; red stone temple; Maratha-era detailing; Deccan plateau pilgrimage context",};

const SACRED_PROFILES = {"Golden Temple — Amritsar": "Architecture: two-storey Harmandir Sahib in the sarovar, white marble lower structure with gilded upper portions/dome and pietra-dura inlay. Materials: white marble, polished stone, gold leaf, reflective water. Colour hierarchy: dominant white marble + warm gold; secondary cool stone/jewel inlay; accents saffron/orange flags. Gold is concentrated gilding, not an all-gold building.", "Takht Sri Patna Sahib — Patna": "Architecture: Sikh gurdwara with domes, arches, marble detailing and sacred courtyard. Materials: white marble/stone, polished metal, gilded dome/kalash details. Colour hierarchy: dominant white/ivory; secondary gold; accents saffron/orange. Main structure remains white; gold stays localized.", "Gurudwara Bangla Sahib — Delhi": "Architecture: historic Sikh gurdwara complex with white architectural massing, golden dome elements and sacred sarovar. Materials: white marble/stone, gilded dome details, water. Colour hierarchy: dominant white/ivory; secondary gold; accents saffron/orange and greenery.", "Jagannath Temple — Puri": "Architecture: classical Kalinga architecture with Vimana/Rekha Deul, Jagamohan, Nata Mandapa, Bhoga Mandapa and Singhadwara. Materials: monumental carved stone/masonry. Colour hierarchy: dominant weathered warm grey/stone and earth tones; secondary red/orange ritual textiles and flags; accents white/yellow/natural wood. Preserve monumental stone; no brightly painted fantasy façade.", "Ram Mandir — Ayodhya": "Architecture: traditional Nagara/Maha-Maru-Gurjara style with mandapas, carved pillars, ornate shikharas and parkota. Materials: Bansi Paharpur pink sandstone with granite plinth. Colour hierarchy: dominant warm pink/rose sandstone; secondary natural beige/tan stone; accents saffron, red, gold and green. Pink sandstone must dominate; never recolour as white marble.", "Hanuman Garhi — Ayodhya": "Architecture: fort-like hilltop temple complex with stepped ascent, enclosed/circular defensive massing and domed entrance. Materials: painted masonry/plaster, stone steps. Colour hierarchy: dominant warm ochre/orangish-red; secondary cream; accents red/saffron and greenery. Retain warm orange identity without neon saturation.", "Mahakaleshwar — Ujjain": "Architecture: historic Shaiva temple blending Bhumija, Maratha and Chalukya influences; multi-storeyed sacred structure. Materials: stone, masonry, carved elements, brass/copper ritual objects. Colour hierarchy: dominant muted stone/cream/earth; secondary dark stone/brass; accents saffron/red. Ritual colours are accents, not total façade colour.", "Kashi Vishwanath — Varanasi": "Architecture: historic Kashi Vishwanath complex in dense Varanasi sacred-city fabric; shikhara/domes with gold plating on major domes. Materials: stone/masonry, gilded domes, brass ritual objects. Colour hierarchy: dominant warm stone/cream; secondary rich gold on domes; accents saffron, red, marigold yellow and river blue. Gold is concentrated on domes.", "Dwarkadhish Temple — Dwarka": "Architecture: five-storey Jagat Mandir with highly carved walls, soaring shikhara and large ritual flag. Materials: soft limestone/sand-coloured masonry and carved stone. Colour hierarchy: dominant pale warm limestone/sand; secondary weathered beige-grey; accents saffron/red/yellow/green flag colours and sea blue. Stone remains pale/natural; flag is the strong saturated accent.", "Omkareshwar — Madhya Pradesh": "Architecture: North Indian temple on Mandhata island with layered stone shikhar, carved friezes, verandahs and pillared hall; Narmada/Kaveri geography. Materials: weathered soft stone and carved masonry. Colour hierarchy: dominant natural warm grey/tan stone; secondary muted earth tones; accents saffron/red, marigold orange and river blue-green.", "Banke Bihari Temple — Vrindavan": "Architecture: historic Braj temple embedded in dense Vrindavan pilgrimage lanes and courtyard fabric. Materials: painted/plastered masonry and stone. Colour hierarchy: dominant warm cream/white and muted masonry; secondary red/maroon/pink; accents saffron/yellow marigold/green.", "Prem Mandir — Vrindavan": "Architecture: grand contemporary Radha-Krishna temple with ornate North Indian-inspired composition and sculptural panels. Materials: premium white Italian Carrara marble over granite foundation. Colour hierarchy: dominant brilliant white marble; secondary cool neutrals; accents restrained pink/rose, warm gold and garden greens. White marble must dominate.", "Shri Krishna Janmabhoomi — Mathura": "Architecture: sacred Mathura temple complex within historic pilgrimage-city fabric; use verified current viewpoint rather than inventing a façade. Materials: masonry/stone, painted and carved surfaces, brass ritual elements. Colour hierarchy: dominant warm cream/stone; secondary red/maroon and saffron; accents yellow marigold, gold and greenery.", "Chitrakoot — Madhya Pradesh/Uttar Pradesh": "Architecture: pilgrimage landscape of Mandakini river, Ram Ghat, colourful ghats, hill shrines and forested terrain. Materials: river stone, painted masonry, steps, boats, natural rock and vegetation. Colour hierarchy: dominant earth/stone and river blue-green; secondary cream/ochre; accents saffron, red and marigold. Landscape and ghats carry the colour story.", "Maa Sharda Devi — Maihar": "Architecture: hilltop Sharda shrine on Trikuta mountain with long stair ascent and wooded Vindhya/Kaimore backdrop. Materials: painted masonry, stone steps, silver-clad sanctum details. Colour hierarchy: dominant white temple + green mountain; secondary grey stone; accents bright red/orange and silver.", "Janaki Mandir — Janakpur": "Architecture: three-storey Janaki Mandir blending local, Mughal and Rajput/Mithila influences with ornate arches, domes and palace-like symmetry. Materials: white/light stone and marble, painted detailing, metal decoration. Colour hierarchy: DOMINANT bright white/ivory; SECONDARY restrained green/turquoise; ACCENTS red/maroon, limited blue/cyan and ochre/gold. WHITE MUST REMAIN DOMINANT; never turn it into a pink, sandstone, yellow or uniformly multicoloured palace.", "Janaki Temple — Sitamarhi": "Architecture: Punaura Dham Janki Mandir pilgrimage complex; use the current temple complex rather than copying Janakpur. Materials: present-day temple masonry/plaster, stone and ritual metal. Colour hierarchy: use verified current colours and restrained devotional accents. Do not transfer Janakpur's palette automatically.", "Khajuraho Temples — Madhya Pradesh": "Architecture: Chandela-era Nagara temples with high plinths, clustered shikharas, mandapas and dense high-relief sculpture. Materials: honey-coloured/warm buff sandstone; some temples use granite. Colour hierarchy: dominant warm honey/buff sandstone; secondary deep stone shadow; accents natural vegetation and sky. Stone texture and sculpture dominate; no white marble recolouring or artificial paint.", "Konark Sun Temple — Odisha": "Architecture: 13th-century Kalinga monument conceived as Surya's colossal stone chariot, with wheels, horses and dense carved sculpture. Materials: weathered stone/sandstone and aged masonry. Colour hierarchy: dominant warm weathered ochre/brown/muted rust/grey stone; secondary dark carved recesses; accents vegetation green and sky/ocean blue. Archaeological patina, not a freshly painted temple.",
"Somnath — Gujarat":"Architecture: contemporary temple rebuilt in Chalukya-inspired style beside the Arabian Sea. Materials: pale warm stone and carved masonry. Colour hierarchy: natural sandstone/cream dominates; sea blue and saffron remain environmental accents.",
"Mallikarjuna — Srisailam":"Architecture: Dravidian temple complex with gopuram, courtyards and carved stone details in Srisailam. Materials: stone, masonry and ritual metal. Colour hierarchy: natural grey/tan stone with restrained painted and saffron accents; Nallamala greens frame the shrine.",
"Kedarnath — Uttarakhand":"Architecture: compact Himalayan stone temple with a heavy stone body and rising shikhara, set against high mountains. Materials: massive grey stone blocks and slate. Colour hierarchy: cool grey stone dominates; snow, earth and saffron are natural accents.",
"Bhimashankar — Maharashtra":"Architecture: historic temple with Nagara and regional Deccan details amid dense Sahyadri forest. Materials: dark basalt and weathered masonry. Colour hierarchy: charcoal-grey stone, forest green and restrained saffron; no bright fantasy paint.",
"Trimbakeshwar — Nashik":"Architecture: historic black-stone temple with distinctive shikhara and carved details near Brahmagiri. Materials: dark basalt and masonry. Colour hierarchy: charcoal stone dominates, with muted earth, green and saffron accents.",
"Vaidyanath — Deoghar":"Architecture: historic Deoghar temple complex with a pale central shikhara and surrounding shrines. Materials: weathered masonry and stone. Colour hierarchy: muted cream/stone, red and saffron ritual accents; keep the dense pilgrimage courtyard credible.",
"Nageshwar — Dwarka":"Architecture: modern temple complex in the coastal Dwarka region; show the actual site context without inventing ancient detailing. Materials: present-day masonry and stone. Colour hierarchy: natural stone/cream with restrained saffron and coastal sky tones.",
"Rameshwaram — Tamil Nadu":"Architecture: Ramanathaswamy Temple's monumental Dravidian corridors, repeated carved pillars and gopurams. Materials: stone and painted masonry. Colour hierarchy: warm stone and cream with authentic muted painted details; preserve long corridor perspective.",
"Grishneshwar — Ellora":"Architecture: compact red-stone temple with regional Maratha-era detailing near Ellora. Materials: warm red/brown stone and carved masonry. Colour hierarchy: natural red sandstone dominates, with dark recesses and restrained greenery/saffron.",};

const PLAT={
 yts:{name:"YouTube Shorts",size:"1080 × 1920 px",ratio:"9:16"},
 igfeed:{name:"Instagram Feed",size:"1080 × 1350 px",ratio:"4:5"},
 square:{name:"Instagram / Social",size:"1080 × 1080 px",ratio:"1:1"},
 yt:{name:"YouTube Landscape",size:"1280 × 720 px",ratio:"16:9"},
 uhd:{name:"UHD / 4K",size:"3840 × 2160 px",ratio:"16:9"},
 pin:{name:"Pinterest / Poster",size:"1000 × 1500 px",ratio:"2:3"}
};

const HOOKS={
 english:{
  curiosity:["What makes this sacred place unforgettable?","Why does this ancient shrine draw generations of seekers?","What secret does this sacred landscape seem to hold?"],
  devotional:["Where faith meets the eternal.","A divine journey begins here.","A darshan that stays with the heart."],
  wisdom:["Ancient wisdom, still alive today.","A timeless lesson hidden in sacred stone.","Where heritage meets spiritual wisdom."],
  travel:["A darshan worth the journey.","One destination. Centuries of faith.","A sacred landmark to experience once."],
  mystery:["What lies beyond this sacred gateway?","The mystery behind this legendary shrine.","There is more here than first meets the eye."],
  emotional:["Some places are felt, not explained.","A place where the heart becomes still.","Faith, silence and a timeless connection."]
 },
 hindi:{
  curiosity:["इस पवित्र धाम की खासियत क्या है?","पीढ़ियों से श्रद्धालु यहाँ क्यों आते हैं?","इस पवित्र भूमि का रहस्य क्या है?"],
  devotional:["जहाँ आस्था मिलती है अनंत से।","यहीं से शुरू होती है दिव्य यात्रा।","एक ऐसा दर्शन जो मन में बस जाए।"],
  wisdom:["प्राचीन ज्ञान, आज भी जीवंत।","पवित्र पत्थरों में छिपा शाश्वत संदेश।","जहाँ विरासत मिलती है आध्यात्मिक ज्ञान से।"],
  travel:["एक बार इस धाम के दर्शन जरूर करें।","एक धाम, सदियों की आस्था।","यह पवित्र यात्रा यादगार होगी।"],
  mystery:["इस पवित्र द्वार के आगे क्या है?","इस प्रसिद्ध धाम के पीछे का रहस्य।","जो दिखता है, कहानी उससे कहीं अधिक है।"],
  emotional:["कुछ स्थान समझे नहीं, महसूस किए जाते हैं।","जहाँ पहुँचकर मन अपने आप शांत हो जाता है।","आस्था, शांति और एक शाश्वत जुड़ाव।"]
 },
 hinglish:{
  curiosity:["Is sacred place ki asli khaasiyat kya hai?","Generations se bhakt yahan kyun aate hain?","Is pavitra bhoomi ka mystery kya hai?"],
  devotional:["Jahan faith milta hai eternity se.","Yahin se shuru hoti hai divine journey.","Ek darshan jo dil mein bas jaaye."],
  wisdom:["Ancient wisdom, aaj bhi alive.","Sacred stone mein chhupa timeless message.","Jahan heritage milti hai spiritual wisdom se."],
  travel:["Is dham ka darshan ek baar zaroor karein.","One destination, sadiyon ki aastha.","Ye sacred journey yaad rahegi."],
  mystery:["Is sacred gateway ke aage kya hai?","Is legendary dham ka hidden mystery.","Jo dikhta hai, kahani usse zyada hai."],
  emotional:["Kuch jagah explain nahi, feel hoti hain.","Jahan pahunchkar dil khud shaant ho jaata hai.","Faith, sukoon aur timeless connection."]
 }
};

let state={
 platform:"yts",brand:"IBD",hookMode:"single",hookLang:"english",hookStyle:"curiosity",
 hooks:[],grammar:"Natural-Light Spiritual Cinema",vfx:"Reality-first",outputMode:"darshan5"
};

function esc(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove("show"),1300)}
function activeText(id){return document.querySelector("#"+id+" .chip.active")?.textContent?.trim()||""}
function destination(){
 const d=document.getElementById("destination").value;
 return d==="Custom Destination" ? (document.getElementById("customDestination").value.trim()||"Custom sacred destination") : d;
}
function currentHooks(){
 const custom=document.getElementById("customHook").value.trim();
 if(custom) return [custom];
 if(state.hookMode==="none") return [];
 return state.hooks.filter(Boolean);
}
function refreshHooks(){
 const arr=(HOOKS[state.hookLang]?.[state.hookStyle]||[]).slice();
 state.hooks=arr;
 renderHooks();
}
function renderHooks(){
 const list=document.getElementById("hookList");
 list.innerHTML=state.hooks.map((h,i)=>`
  <div class="hook-option ${state.hookMode==="single"&&i===0?"active":""}" data-i="${i}">
    <input type="checkbox" id="hook${i}" ${state.hookMode==="single"?(i===0?"checked":""):(state.hookMode==="multi"?"checked":"")}>
    <label for="hook${i}">${esc(h)}</label>
  </div>`).join("");
 if(state.hookMode==="single" && state.hooks.length) {
   [...list.querySelectorAll("input")].forEach((x,i)=>x.addEventListener("change",()=>{ if(x.checked){state.hooks=[state.hooks[i],...state.hooks.filter((_,j)=>j!==i)]; renderHooks(); updateUI();}}));
 } else {
   list.querySelectorAll("input").forEach(x=>x.addEventListener("change",()=>{updateUI();}));
 }
 updateUI();
}
function selectedHookValues(){
 const custom=document.getElementById("customHook").value.trim();
 if(custom)return [custom];
 if(state.hookMode==="none")return [];
 const boxes=[...document.querySelectorAll("#hookList input")];
 return boxes.filter(x=>x.checked).map(x=>state.hooks[Number(x.id.replace("hook",""))]);
}
function updateHookPreview(){
 const hs=selectedHookValues();
 const p=document.getElementById("hookPreview");
 if(!hs.length){p.innerHTML="<span>HOOK PREVIEW</span><strong>No hook — clean image.</strong>";return}
 p.innerHTML="<span>"+(hs.length>1?"MULTI-HOOK PREVIEW":"HOOK PREVIEW")+"</span>"+hs.map(h=>"<strong>"+esc(h)+"</strong>").join("");
}
function updateUI(){
 const d=destination(),p=PLAT[state.platform],hs=selectedHookValues();
 const ap=document.getElementById("accuracyCard");
 if(ap){
  const prof=SACRED_PROFILES[d];
  const custom=document.getElementById("destination").value==="Custom Destination";
  ap.innerHTML=prof
   ? "<b>DESTINATION IDENTITY LOCK</b><br>"+esc(prof)+"<br><br>Cinematic treatment may enhance this identity, but must not redesign, recolour or genericise it."
   : custom
    ? "<b>UNVERIFIED CUSTOM DESTINATION</b><br>This library cannot confirm this place's architecture, materials, colours, regional details, landscape or lighting. Supply destination-specific reference details and verify them against reliable sources; do not assume or invent missing details."
    : "<b>DESTINATION PROFILE MISSING</b><br>This destination has no encoded identity profile. Verify its architecture, materials, colours and setting against reliable references before generating.";
 }
 document.getElementById("statusDestination").textContent=d;
 document.getElementById("statusPlatform").textContent=p.name+" • "+p.size+" • "+p.ratio;
 document.getElementById("statusBrand").textContent=state.brand==="IBD_ASP"?"IBD + ASP":state.brand;
 document.getElementById("statusHooks").textContent=hs.length+(hs.length===1?" selected":" selected");
 document.getElementById("selectedPlatform").innerHTML="SELECTED: <b>"+esc(p.name+" • "+p.size+" • "+p.ratio)+"</b>";
 const modelLabel=document.getElementById("imageModel").selectedOptions[0].textContent;
 document.getElementById("liveConfig").textContent=d+" • "+modelLabel+" • "+p.name+" • "+(state.brand==="IBD_ASP"?"IBD + ASP":state.brand)+" • "+hs.length+" hook"+(hs.length===1?"":"s");
 updateHookPreview();
}
function brandInstruction(){
 const b={
  IBD:"POST-PRODUCTION BRAND OVERLAY: reserve an unobstructed bottom-centre safe zone for the approved IBD — An Indian Bhakti Dhara Production logo; do not invent or approximate a logo.",
  ASP:"POST-PRODUCTION BRAND OVERLAY: reserve unobstructed top-left and bottom-centre safe zones for the approved ASP — Anupam Shiv Parivar and IBD — An Indian Bhakti Dhara Production logos; do not invent or approximate logos.",
  IBD_ASP:"POST-PRODUCTION BRAND OVERLAY: reserve unobstructed top-left and bottom-centre safe zones for the approved ASP — Anupam Shiv Parivar and IBD — An Indian Bhakti Dhara Production logos; do not invent or approximate logos.",
  NONE:"No branding."
 };return b[state.brand]
}
function hookInstruction(hooks){
 if(!hooks.length)return "ON-IMAGE HOOK: NONE. Keep the image clean with no headline text.";
 if(hooks.length===1)return "ON-IMAGE HOOK: "+hooks[0]+" — use exact, legible editorial typography in the upper safe zone only if the image model can render it reliably; otherwise leave that area clear for post-production typesetting. Never invent text.";
 return "MULTI-HOOK OPTIONS: "+hooks.map((h,i)=>"HOOK "+(i+1)+": "+h).join(" | ")+" — these are alternatives; use one per final asset, never render multiple hooks together. If exact typography is unreliable, leave the upper safe zone clear for post-production typesetting.";
}
function basePrompt(type,hook){
 const selectedDestination=document.getElementById("destination").value;
 const isCustom=selectedDestination==="Custom Destination";
 const d=destination(), context=DEST[d]||d, profile=SACRED_PROFILES[d], p=PLAT[state.platform];
 const camera=document.getElementById("camera").value,lens=document.getElementById("lens").value,angle=document.getElementById("angle").value,light=activeText("lighting"),eco=document.getElementById("ecosystem").value,custom=document.getElementById("custom").value.trim(),scene=document.getElementById("sceneBrief").value.trim();
 const grammar=state.grammar,vfx=state.vfx;
 const treatment={
  photoreal:"photorealistic live-action cinematic still, physically plausible light and materials, subtle film grain",
  "fine-art":"premium fine-art devotional painting, refined brushwork and layered pigments, reverent composition, preserve real sacred-site architecture and its authentic material colours",
  editorial:"premium travel-editorial photography, intentional art direction, elegant natural colour, polished but believable photographic detail"
 }[document.getElementById("visualTreatment").value];
 const mood={
  EPIC:"monumental environmental storytelling, layered foreground-midground-background depth, powerful architectural silhouette, elevated sense of scale",
  DOCUMENTARY:"observational realism, believable pilgrimage behavior, authentic geography, naturalistic photographic response, restrained spectacle",
  DEVOTIONAL:"quiet sacred emotion, reverence, refined devotional atmosphere, luminous but physically plausible ambience"
 }[type];
 const identityRule="DESTINATION IDENTITY PRESERVATION: treat this real place as reference-critical. Preserve its encoded architectural character, primary building material and dominant colour, secondary and accent colours in their logical proportions, regional details, local landscape and natural weathering or patina. Cinematic lighting may alter illumination, shadows and reflections only; it must not recolour materials, redesign the structure, exaggerate accents, add unlisted ornament or replace the regional setting. Make the selected lighting plausible for the scene and let it interact naturally with the real materials. No generic temple styling.";
 const referenceDetails=isCustom?document.getElementById("customDestinationDetails").value.trim():"";
 const customWarning=isCustom
  ? "CUSTOM DESTINATION ACCURACY CAVEAT: this location is not verified by the built-in destination library. Use only the destination-specific reference details supplied below; do not assume or invent its architecture, palette, materials, landscape, regional details or lighting. Verify against reliable visual references before use."
  : "";
 const customReference=referenceDetails?"USER-SUPPLIED DESTINATION REFERENCE DETAILS (verify before use): "+referenceDetails+".":"";
 return `${treatment} of ${d}. ${context}. ${profile ? ("ENCODED DESTINATION PROFILE: "+profile) : "No verified destination profile is available; preserve only reference details explicitly supplied and flag unknown details for human verification."} ${customReference} ${identityRule} ${customWarning} ${mood}. ${grammar} visual grammar, ${eco} delivery. Camera: ${camera}; lens: ${lens}; framing: ${angle}; lighting: ${light}. Authentic regional materials with visible pores, tool marks, plausible metal reflections, natural fabric weave, botanical variation and physically correct water response. Natural weathering only where appropriate to the site; do not add artificial decay. ${scene?"SCENE BRIEF: "+scene+". ":""}${vfx} VFX: motivated volumetric atmosphere, physically based materials, realistic global illumination, restrained haze, subtle film grain and natural highlight roll-off. ${custom?custom+". ":""}Create one cohesive image in ${p.ratio} aspect ratio for ${p.size}; no collage, no grid, no multiple panels. ${hookInstruction(hook?[hook]:[])} ${brandInstruction()}`;
}
function negative(){
 return `incorrect architectural colour, recoloured façade, generic temple palette, fake painted stone, colour grading that changes the real building colour, plastic or wax surfaces, CGI-looking materials, fake HDR, oversharpening, excessive bloom, flat or muddy light, floating objects, impossible physics, wrong perspective, clutter, wires, scaffolding, modern signboards, garbled or fake text, distorted faces or eyes, malformed hands, extra limbs, duplicated subjects, low resolution, blur, oversaturated neon, cartoon, anime, tourists posing with phones, disrespectful poses, incorrect architecture, invented sacred details, wrong religious symbols, unwanted watermark, unwanted logo, border, UI artifacts, collage, grid, multiple panels`;
}
function cgi(){
 return `Pipeline cue: premium photoreal VFX plate; ACES-style colour management; physically based materials; ray-traced global illumination; displacement-mapped stone porosity; Fresnel water; realistic skin/petal subsurface scattering where applicable.
- volumetric god rays motivated by a visible light source, with soft shaft falloff and natural dust density.
- three-plane atmospheric depth from foreground to background; ground-hugging mist only when physically justified.
- subtle film grain and gentle highlight halation; photographic highlight roll-off.
- Every glow must be motivated by a visible source; no painted halos or fantasy fog.`;
}
function params(){
 const p=PLAT[state.platform], model=document.getElementById("imageModel").value;
 const details=`Platform: ${p.name} | ${p.size} | ${p.ratio}
Camera: ${document.getElementById("camera").value}
Lens: ${document.getElementById("lens").value}
Lighting: ${activeText("lighting")}
Finish: natural optical sharpness, realistic depth of field, restrained highlight roll-off, premium colour grade
Composition: one image only; preserve the selected ${p.ratio} aspect ratio.`;
 if(model==="midjourney") return `${details}
Midjourney parameters: --ar ${p.ratio.replace(":","/")} --style raw --stylize 150 --chaos 5
Use the current default model version; do not add unsupported flags.`;
 if(model==="sdxl") return `${details}
Stable Diffusion XL starting point: 1024px on the shorter side, DPM++ 2M Karras sampler, 30–40 steps, CFG 5–7. Adjust to the selected interface and checkpoint.`;
 if(model==="flux") return `${details}
FLUX guidance: use the positive prompt as a natural-language description; there is no separate negative-prompt field in many FLUX interfaces.`;
 return `${details}
OpenAI Images / ChatGPT: use the prompt as natural language and select the closest available ${p.ratio} output size in the image interface.`;
}
function variations(){
 const common=[
  "VARIATION 1 — Establishing wide, eye level: calm symmetrical frame, complete structure and setting, clear foreground/midground/background separation.",
  "VARIATION 2 — Low-angle monumental: camera close to ground, architecture towering overhead, strong converging lines, sky occupying the upper third.",
  "VARIATION 3 — Aerial reveal: elevated environmental view showing the sacred complex, surrounding geography, river/streets/landscape and horizon as one coherent reveal.",
  "VARIATION 4 — Reflection viewpoint: water-level or reflective foreground, structure doubled naturally by ripples, warm practical light where appropriate.",
  "VARIATION 5 — Telephoto compression: long-lens stacked layers of domes, flags, devotees and atmospheric haze, strong depth compression."
 ];
 return common.map((x,i)=>x+" Hook strategy: "+(currentHooks()[i%Math.max(currentHooks().length,1)]||"none")+"; preserve destination identity and exact platform dimensions.").join("\n");
}
function makePrompt(type,hook){
 const p=basePrompt(type,hook);
 const modelName={
  openai:"OpenAI Images / ChatGPT",
  midjourney:"Midjourney",
  flux:"FLUX",
  sdxl:"Stable Diffusion XL"
 }[document.getElementById("imageModel").value];
 const negativeHeading=document.getElementById("imageModel").value==="sdxl"?"NEGATIVE PROMPT":"AVOID / QUALITY GUARDRAILS";
 if(state.outputMode==="compact") return `DESTINATION: ${destination()}
MODEL: ${modelName}
VISUAL MODE: ${type}
PLATFORM: ${PLAT[state.platform].size} • ${PLAT[state.platform].ratio}

PROMPT:
${p}

${negativeHeading}:
${negative()}

MODEL / DELIVERY NOTES:
${params()}`;
 return `=== CINEMATIC IMAGE PROMPT | ${destination().toUpperCase()} ===
MODEL: ${modelName} | FRAME: ${PLAT[state.platform].ratio} | ${PLAT[state.platform].size}

--- 1 | IMAGE PROMPT ---
${p}

--- 2 | ${negativeHeading} ---
${negative()}

--- 3 | CGI / VFX BLOCK ---
${cgi()}

--- 4 | MODEL / DELIVERY NOTES ---
${params()}

--- 5 | VARIATIONS AND ANGLES ---
${variations()}

--- HUMAN PRE-FLIGHT REVIEW ---
Check destination identity, architecture, geography, cultural details, materials, anatomy, text safe zones, logo overlays, aspect ratio and single-image composition against the intended reference.
Review the reference accuracy lock before using a custom destination; no automatic accuracy score is claimed.`;
}
function generate(){
 const hs=currentHooks();
 const types=["EPIC","DOCUMENTARY","DEVOTIONAL"];
 const out=document.getElementById("results");
 out.innerHTML=types.map((type,i)=>{
   const hook=hs.length?hs[i%hs.length]:"";
   const text=makePrompt(type,hook);
   return `<article class="result">
    <div class="result-head"><div><b>0${i+1} — ${type}</b><span> ${hook?"• "+esc(hook):"• No hook"}</span></div>
    <div class="result-actions"><button class="secondary" type="button" data-copy="prompt-${i}">COPY</button></div></div>
    <pre id="prompt-${i}">${esc(text)}</pre>
   </article>`;
 }).join("");
 toast("Prompts generated ✓");
}
async function copyText(text){
 text=String(text||""); if(!text.trim()){toast("Nothing to copy");return false}
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);toast("Copied ✓");return true}}catch(e){}
 try{
  const ta=document.createElement("textarea");ta.value=text;ta.readOnly=true;ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,ta.value.length);
  const ok=document.execCommand("copy");ta.remove();if(ok){toast("Copied ✓");return true}
 }catch(e){}
 toast("Copy blocked — select text manually");return false
}
function allOutputText(){
 return [...document.querySelectorAll("#results .result pre")].map(x=>x.textContent).join("\n\n==============================\n\n");
}
document.getElementById("generateBtn").addEventListener("click",generate);
document.getElementById("mobileGenerateBtn").addEventListener("click",()=>{
 generate();
 document.getElementById("outputPanel").scrollIntoView({behavior:"smooth",block:"start"});
});
document.getElementById("copyAllBtn").addEventListener("click",()=>copyText(allOutputText()));
document.getElementById("copyMasterBtn").addEventListener("click",()=>copyText(allOutputText()));
document.getElementById("downloadBtn").addEventListener("click",()=>{
 const text=allOutputText();
 if(!text.trim()){toast("Generate prompts before downloading");return}
 const blob=new Blob([text],{type:"text/plain;charset=utf-8"});
 const url=URL.createObjectURL(blob);
 const link=document.createElement("a");
 link.href=url;
 link.download="sanatan-cinematic-prompts.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
 toast("Prompt file downloaded ✓");
});
document.getElementById("results").addEventListener("click",e=>{
 const b=e.target.closest("[data-copy]");if(!b)return;
 const el=document.getElementById(b.dataset.copy);if(el)copyText(el.textContent);
});
document.querySelectorAll("#grammar .chip,#lighting .chip,#vfx .chip").forEach(b=>b.addEventListener("click",()=>{
 const group=b.parentElement;group.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 if(group.id==="grammar")state.grammar=b.textContent.trim(); if(group.id==="vfx")state.vfx=b.textContent.trim(); updateUI();
}));
document.getElementById("destination").addEventListener("change",e=>{
 document.getElementById("customDestinationWrap").style.display=e.target.value==="Custom Destination"?"grid":"none";updateUI();
});
document.getElementById("customDestination").addEventListener("input",updateUI);
document.querySelectorAll(".platform-btn").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".platform-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.platform=b.dataset.id;updateUI();
}));
document.querySelectorAll("[data-brand]").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll("[data-brand]").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.brand=b.dataset.brand;
 const bp=document.getElementById("brandPreview");
 const txt={IBD:"IBD — An Indian Bhakti Dhara Production",ASP:"ASP — Anupam Shiv Parivar",IBD_ASP:"IBD + ASP",NONE:"NO BRANDING"}[state.brand];
 const pos=state.brand==="IBD_ASP"||state.brand==="ASP"?"ASP top-left • IBD bottom-centre":"IBD bottom-centre safe zone";
 bp.innerHTML="<b>"+esc(txt)+"</b><span>"+esc(pos)+" • branding QA fail-closed</span>";updateUI();
}));
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll("[data-lang]").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.hookLang=b.dataset.lang;refreshHooks();
}));
document.getElementById("hookStyle").addEventListener("change",e=>{state.hookStyle=e.target.value;refreshHooks()});
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{
 const parent=b.parentElement;
 if(parent.id==="hookModes"){
  parent.querySelectorAll(".mode").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.hookMode=b.dataset.mode;renderHooks();
 } else if(parent.id==="outputModes"){
  parent.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.outputMode=b.dataset.mode;
 }
}));
document.getElementById("regenHooks").addEventListener("click",()=>{state.hooks=[...(HOOKS[state.hookLang]?.[state.hookStyle]||[])].sort(()=>Math.random()-.5);renderHooks();toast("New hook order ✓")});
document.getElementById("selectAllHooks").addEventListener("click",()=>{
 if(state.hookMode==="single"){state.hookMode="multi";document.querySelectorAll("#hookModes .mode").forEach(x=>x.classList.toggle("active",x.dataset.mode==="multi"))}
 document.querySelectorAll("#hookList input").forEach(x=>x.checked=true);updateUI();
});
document.getElementById("customHook").addEventListener("input",updateUI);
["imageModel","visualTreatment","sceneBrief","custom","customDestinationDetails","camera","lens","angle","ecosystem"].forEach(id=>{
 document.getElementById(id).addEventListener("change",updateUI);
 document.getElementById(id).addEventListener("input",updateUI);
});
refreshHooks();updateUI();generate();




const JYOTIRLINGAS = [
  {name:"Somnath", destination:"Somnath — Gujarat", place:"Gujarat"},
  {name:"Mallikarjuna", destination:"Mallikarjuna — Srisailam", place:"Srisailam"},
  {name:"Mahakaleshwar", destination:"Mahakaleshwar — Ujjain", place:"Ujjain"},
  {name:"Omkareshwar", destination:"Omkareshwar — Madhya Pradesh", place:"Madhya Pradesh"},
  {name:"Kedarnath", destination:"Kedarnath — Uttarakhand", place:"Uttarakhand"},
  {name:"Bhimashankar", destination:"Bhimashankar — Maharashtra", place:"Maharashtra"},
  {name:"Kashi Vishwanath", destination:"Kashi Vishwanath — Varanasi", place:"Varanasi"},
  {name:"Trimbakeshwar", destination:"Trimbakeshwar — Nashik", place:"Nashik"},
  {name:"Vaidyanath", destination:"Vaidyanath — Deoghar", place:"Deoghar"},
  {name:"Nageshwar", destination:"Nageshwar — Dwarka", place:"Dwarka"},
  {name:"Rameshwaram", destination:"Rameshwaram — Tamil Nadu", place:"Tamil Nadu"},
  {name:"Grishneshwar", destination:"Grishneshwar — Ellora", place:"Ellora"}
];
let selectedJyotirlinga = 0;
function selectJyotirlinga(index, shouldScroll = false) {
  selectedJyotirlinga = (index + JYOTIRLINGAS.length) % JYOTIRLINGAS.length;
  const shrine = JYOTIRLINGAS[selectedJyotirlinga];
  const select = document.getElementById("destination");
  select.value = shrine.destination;
  document.getElementById("customDestinationWrap").style.display = "none";
  document.querySelectorAll(".jy-card").forEach((card, i) => {
    const active = i === selectedJyotirlinga;
    card.classList.toggle("active", active);
    card.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("jyStep").textContent = String(selectedJyotirlinga + 1).padStart(2, "0");
  document.getElementById("jyStatus").textContent = shrine.name.toUpperCase();
  updateUI();
  if (shouldScroll) document.getElementById("jyotirlingaGrid").scrollIntoView({behavior:"smooth", block:"center"});
}
const jyGrid = document.getElementById("jyotirlingaGrid");
jyGrid.innerHTML = JYOTIRLINGAS.map((shrine, index) => `<button type="button" class="jy-card" data-index="${index}" aria-pressed="false"><b>${String(index + 1).padStart(2,"0")}</b><span>${esc(shrine.name)}</span><small>${esc(shrine.place)}</small></button>`).join("");
jyGrid.addEventListener("click", event => {
  const card = event.target.closest(".jy-card");
  if (card) selectJyotirlinga(Number(card.dataset.index));
});
document.getElementById("jyPrev").addEventListener("click", () => selectJyotirlinga(selectedJyotirlinga - 1, true));
document.getElementById("jyNext").addEventListener("click", () => selectJyotirlinga(selectedJyotirlinga + 1, true));
document.getElementById("destination").addEventListener("change", event => {
  const index = JYOTIRLINGAS.findIndex(shrine => shrine.destination === event.target.value);
  if (index >= 0) selectJyotirlinga(index);
});
selectJyotirlinga(0);
