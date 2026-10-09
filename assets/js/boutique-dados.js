/* =========================================================================
   boutique-dados.js — os produtos e os kits da Boutique Nuovi.
   Para incluir um produto, acrescente uma linha em PRODUTOS (e, se for o
   caso, use o id dele em KITS). A página /boutique/ monta tudo a partir daqui.

   preco: null  → aparece "Consulte" e não entra no subtotal.
   preco: 89.9  → aparece "R$ 89,90".
   foto: null   → aparece o placeholder "Foto a caminho" com a marca.
   foto: 'previa-keeping-shampoo' → base do nome dos arquivos em
     assets/img/produtos/: -400.webp, -800.webp, -1200.webp (quadradas,
     fundo transparente) e -800.jpg (reserva). Para gerar a partir de uma
     foto nova, use ferramentas/tratar-fotos-produtos.py.
   necessidades: chaves de NECESSIDADES (abaixo).
   ========================================================================= */

const WHATSAPP = '5512996556111'; // WhatsApp oficial do salão

const MARCAS = {
  previa: { nome: 'Previa', subtitulo: 'Natural Haircare', texto: 'Vegana, sem sulfatos e sem parabenos.' },
  ph: { nome: 'pH Laboratories', subtitulo: 'Tratamento profissional', texto: 'Tratamento profissional italiano.' },
};

const NECESSIDADES = {
  colorido: 'Cabelo colorido',
  loiras: 'Loiras',
  danificado: 'Danificado/química',
  frizz: 'Frizz/liso',
  ressecado: 'Ressecado',
  oleosidade: 'Oleosidade/caspa',
  queda: 'Queda/fios finos',
  cachos: 'Cachos',
  volume: 'Volume/textura',
  presentes: 'Presentes',
};

const COLECOES = [
  { id: 'previa-keeping', marca: 'previa', nome: 'Keeping', tema: 'Pós-coloração', paraQuem: 'cabelos coloridos, com mechas ou luzes.' },
  { id: 'previa-silver', marca: 'previa', nome: 'Silver', tema: 'Loiras', paraQuem: 'loiras, grisalhas e descoloridas.' },
  { id: 'previa-reconstruct', marca: 'previa', nome: 'Reconstruct', tema: 'Reconstrução', paraQuem: 'cabelos danificados, quebradiços e com química.' },
  { id: 'previa-extra-life', marca: 'previa', nome: 'Extra Life', tema: 'Couro cabeludo', paraQuem: 'oleosidade, caspa, queda e fios finos.' },
  { id: 'previa-smoothing', marca: 'previa', nome: 'Smoothing', tema: 'Antifrizz', paraQuem: 'frizz e eletricidade estática.' },
  { id: 'previa-style', marca: 'previa', nome: 'Style & Finish', tema: 'Finalização', paraQuem: 'quem quer modelar, dar textura, volume ou definição.' },
  { id: 'previa-lifestyle', marca: 'previa', nome: 'Lifestyle', tema: 'Acessórios', paraQuem: '' },
  { id: 'ph-argan', marca: 'ph', nome: 'Argan & Keratin', tema: 'Pós-coloração premium', paraQuem: 'cabelos coloridos que querem brilho e nutrição.' },
  { id: 'ph-smooth', marca: 'ph', nome: 'Smooth Perfect', tema: 'Liso perfeito', paraQuem: 'frizz, progressiva e escova.' },
  { id: 'ph-deep', marca: 'ph', nome: 'Deep Moisture', tema: 'Hidratação intensa', paraQuem: '' },
  { id: 'ph-pure', marca: 'ph', nome: 'Pure Repair', tema: 'Reparação', paraQuem: '' },
];

const PRODUTOS = [
  // PREVIA · Keeping — pós-coloração
  { id: 'previa-keeping-shampoo', marca: 'previa', colecao: 'previa-keeping', nome: 'After Color Shampoo', tamanho: '340 ml', legenda: 'Sua cor de salão, viva por muito mais tempo.', descricao: 'Shampoo suave para cabelos coloridos e com mechas. Com extratos orgânicos de nogueira verde e damasco, limpa sem desbotar, preserva o tom e realça os reflexos.', uso: 'Aplicar no cabelo molhado, massagear e enxaguar.', necessidades: ['colorido'], preco: null, foto: 'previa-keeping-shampoo' },
  { id: 'previa-keeping-cond', marca: 'previa', colecao: 'previa-keeping', nome: 'After Color Conditioner', tamanho: '250 ml', legenda: 'Cor protegida, fios macios e brilhantes.', descricao: 'Condicionador pós-coloração com fitocomplexo de nogueira verde. Sela a cutícula, desembaraça e ajuda a manter a intensidade da cor.', uso: 'No comprimento e nas pontas; deixar 2 min e enxaguar.', necessidades: ['colorido', 'loiras'], preco: null, foto: 'previa-keeping-cond' },
  { id: 'previa-keeping-mask', marca: 'previa', colecao: 'previa-keeping', nome: 'After Color Treatment', tamanho: '150 ml', legenda: 'O tratamento que sua coloração merece.', descricao: 'Máscara intensiva para cabelos coloridos. Nutre, devolve maciez e prolonga o brilho da cor.', uso: 'Após o shampoo, deixar 3 a 5 min e enxaguar. 1 a 2 vezes por semana.', necessidades: ['colorido'], preco: null, foto: 'previa-keeping-mask' },
  // PREVIA · Silver — loiras
  { id: 'previa-silver-shampoo', marca: 'previa', colecao: 'previa-silver', nome: 'Silver Shampoo', tamanho: '250 ml', legenda: 'Adeus, amarelado. Olá, loiro perfeito.', descricao: 'Shampoo matizador que neutraliza tons amarelados e devolve o loiro frio e luminoso, sem ressecar.', uso: 'Deixar 1 a 3 min no cabelo molhado e enxaguar, 1 a 2 vezes por semana.', necessidades: ['loiras'], preco: null, foto: 'previa-silver-shampoo' },
  // PREVIA · Reconstruct — reconstrução
  { id: 'previa-reconstruct-shampoo', marca: 'previa', colecao: 'previa-reconstruct', nome: 'Regenerating Shampoo', tamanho: '250 ml', legenda: 'Reconstrução de luxo com trufa branca.', descricao: 'Shampoo regenerador com fitocomplexo de trufa branca que limpa com delicadeza e fortalece a fibra.', uso: 'Aplicar, massagear e enxaguar.', necessidades: ['danificado'], preco: null, foto: 'previa-reconstruct-shampoo' },
  { id: 'previa-reconstruct-cond', marca: 'previa', colecao: 'previa-reconstruct', nome: 'Regenerating Conditioner', tamanho: '250 ml', legenda: 'Menos quebra, mais força em cada fio.', descricao: 'Repara, desembaraça e devolve elasticidade aos fios fragilizados.', uso: 'No comprimento e nas pontas; deixar 2 min e enxaguar.', necessidades: ['danificado'], preco: null, foto: 'previa-reconstruct-cond' },
  { id: 'previa-reconstruct-mask', marca: 'previa', colecao: 'previa-reconstruct', nome: 'Regenerating Treatment', tamanho: '150 ml', legenda: 'Efeito preenchedor para fios cansados.', descricao: 'Máscara reconstrutora de ação antiidade que devolve corpo, maciez e brilho.', uso: 'Deixar 5 a 10 min e enxaguar.', necessidades: ['danificado', 'ressecado'], preco: null, foto: 'previa-reconstruct-mask' },
  { id: 'previa-filler-serum', marca: 'previa', colecao: 'previa-reconstruct', nome: 'Filler Serum', tamanho: '', legenda: 'Tratamento concentrado para pontas desgastadas.', descricao: 'Sérum preenchedor com trufa branca que reduz a porosidade e dá toque sedoso sem pesar.', uso: 'Poucas gotas do comprimento às pontas, sem enxágue.', necessidades: ['danificado'], preco: null, foto: 'previa-filler-serum' },
  { id: 'previa-biphasic', marca: 'previa', colecao: 'previa-reconstruct', nome: 'Biphasic Leave-in Filler Conditioner', tamanho: '', legenda: 'Desembaraça na hora. Trata o dia todo.', descricao: 'Leave-in bifásico com trufa branca, proteínas de trigo e soja e ginseng.', uso: 'Agitar, borrifar no cabelo úmido e pentear.', necessidades: ['danificado', 'frizz'], preco: null, foto: 'previa-biphasic' },
  // PREVIA · Extra Life — couro cabeludo
  { id: 'previa-purifying-shampoo', marca: 'previa', colecao: 'previa-extra-life', nome: 'Purifying Shampoo', tamanho: '250 ml', legenda: 'Couro cabeludo leve, limpo e equilibrado.', descricao: 'Shampoo purificante para couro cabeludo oleoso ou com caspa, com extratos vegetais orgânicos.', uso: 'Massagear no couro cabeludo por 1 min e enxaguar.', necessidades: ['oleosidade'], preco: null, foto: 'previa-purifying-shampoo' },
  { id: 'previa-purifying-treatment', marca: 'previa', colecao: 'previa-extra-life', nome: 'Purifying Treatment', tamanho: '', legenda: 'Detox para o seu couro cabeludo.', descricao: 'Tratamento que ajuda a controlar a oleosidade e a descamação.', uso: 'Deixar 3 a 5 min no couro cabeludo e enxaguar.', necessidades: ['oleosidade'], preco: null, foto: 'previa-purifying-treatment' },
  { id: 'previa-energising-shampoo', marca: 'previa', colecao: 'previa-extra-life', nome: 'Energising Shampoo', tamanho: '250 ml', legenda: 'Força desde a raiz.', descricao: 'Shampoo energizante com células-tronco vegetais de videira, para fios finos e enfraquecidos.', uso: 'Massagear por 2 min e enxaguar.', necessidades: ['queda'], preco: null, foto: 'previa-energising-shampoo' },
  { id: 'previa-tonic-cond', marca: 'previa', colecao: 'previa-extra-life', nome: 'Hair and Scalp Tonic Conditioner', tamanho: '', legenda: 'Tônico e condicionador em um só passo.', descricao: 'Com óleo de argan, alcachofra e bardana; fortalece a raiz e desembaraça.', uso: 'Da raiz às pontas; deixar 2 min e enxaguar.', necessidades: ['queda'], preco: null, foto: null },
  { id: 'previa-energising-lotion', marca: 'previa', colecao: 'previa-extra-life', nome: 'Energising Leave-in Lotion', tamanho: '', legenda: 'Cuidado diário para fios mais fortes.', descricao: 'Loção sem enxágue que energiza o couro cabeludo.', uso: 'Aplicar no couro cabeludo limpo e massagear.', necessidades: ['queda'], preco: null, foto: 'previa-energising-lotion' },
  // PREVIA · Smoothing — antifrizz
  { id: 'previa-taming-cond', marca: 'previa', colecao: 'previa-smoothing', nome: 'Taming Conditioner', tamanho: '200 ml', legenda: 'Disciplina natural para fios rebeldes.', descricao: 'Condicionador antifrizz com linhaça, amêndoa e flor de laranjeira.', uso: 'Deixar 3 a 5 min e enxaguar.', necessidades: ['frizz'], preco: null, foto: 'previa-taming-cond' },
  { id: 'previa-taming-gloss', marca: 'previa', colecao: 'previa-smoothing', nome: 'Taming Gloss', tamanho: '', legenda: 'Brilho de vitrine e zero frizz.', descricao: 'Fluido antifrizz com amêndoa, linhaça e oliva.', uso: 'Pequena quantidade do meio às pontas.', necessidades: ['frizz'], preco: null, foto: 'previa-taming-gloss' },
  // PREVIA · Style & Finish — finalização
  { id: 'previa-sea-salt', marca: 'previa', colecao: 'previa-style', nome: 'Sea Salt Spray', tamanho: '200 ml', legenda: 'Ondas de praia o ano inteiro.', descricao: 'Spray texturizador com bambu, camomila e espirulina.', uso: 'Borrifar a 20 cm e amassar com as mãos.', necessidades: ['volume'], preco: null, foto: 'previa-sea-salt' },
  { id: 'previa-styling-creme', marca: 'previa', colecao: 'previa-style', nome: 'Styling Creme', tamanho: '', legenda: 'Finalização macia, sem frizz e sem enxágue.', descricao: 'Leave-in em creme antifrizz com goji berry e casca de nogueira.', uso: 'Aplicar no cabelo úmido.', necessidades: ['frizz', 'cachos'], preco: null, foto: 'previa-styling-creme' },
  { id: 'previa-glaze', marca: 'previa', colecao: 'previa-style', nome: 'Glaze', tamanho: '', legenda: 'Modelagem com brilho espelhado.', descricao: 'Fluido modelador com extratos cítricos.', uso: 'Espalhar nas mãos e aplicar.', necessidades: ['volume'], preco: null, foto: 'previa-glaze' },
  { id: 'previa-curl-definer', marca: 'previa', colecao: 'previa-style', nome: 'Curl Definer', tamanho: '', legenda: 'Cachos definidos, leves e cheios de vida.', descricao: 'Fluido definidor para ondas e cachos.', uso: 'Amassar de baixo para cima no cabelo úmido.', necessidades: ['cachos'], preco: null, foto: 'previa-curl-definer' },
  { id: 'previa-plumping-serum', marca: 'previa', colecao: 'previa-style', nome: 'Plumping Serum', tamanho: '', legenda: 'Mais corpo e volume para fios finos.', descricao: 'Sérum encorpador que não pesa.', uso: 'Na raiz e no comprimento; secar normalmente.', necessidades: ['volume', 'queda'], preco: null, foto: 'previa-plumping-serum' },
  { id: 'previa-dry-shampoo', marca: 'previa', colecao: 'previa-style', nome: 'Dry Shampoo', tamanho: '', legenda: 'Cabelo de banho tomado em 1 minuto.', descricao: 'Shampoo a seco com amido de tapioca.', uso: 'Borrifar na raiz a 20 cm e escovar.', necessidades: ['oleosidade', 'volume'], preco: null, foto: null },
  // PREVIA · Lifestyle — acessórios
  { id: 'previa-virtuous-brush', marca: 'previa', colecao: 'previa-lifestyle', nome: 'The Virtuous Brush', tamanho: '', legenda: 'A escova que desembaraça e cuida do planeta.', descricao: 'Escova desembaraçadora com cerdas flexíveis, feita com plástico recolhido de áreas costeiras (Ocean Bound Plastic).', uso: 'Escovar das pontas para a raiz.', necessidades: ['presentes'], preco: null, foto: null },
  // pH LABORATORIES · Argan & Keratin — pós-coloração premium
  { id: 'ph-argan-shampoo', marca: 'ph', colecao: 'ph-argan', nome: 'Argan & Keratin Shampoo', tamanho: '', legenda: 'Nutrição e brilho para cabelos coloridos.', descricao: 'Shampoo pós-cor com óleo de argan e queratina.', uso: '', necessidades: ['colorido'], preco: null, foto: 'ph-argan-shampoo' },
  { id: 'ph-argan-mask', marca: 'ph', colecao: 'ph-argan', nome: 'Argan & Keratin Mask', tamanho: '', legenda: 'O luxo do argan em uma máscara.', descricao: 'Máscara pós-cor que nutre, repara e deixa a cor vibrante.', uso: 'Deixar 5 a 10 min.', necessidades: ['colorido', 'ressecado'], preco: null, foto: 'ph-argan-mask' },
  { id: 'ph-argan-elixir', marca: 'ph', colecao: 'ph-argan', nome: 'Argan & Keratin Elixir', tamanho: '100 ml', legenda: 'Gotas de brilho iluminador.', descricao: 'Elixir finalizador que sela as pontas e controla o frizz.', uso: '2 a 3 gotas do meio às pontas.', necessidades: ['colorido', 'frizz', 'presentes'], preco: null, foto: 'ph-argan-elixir' },
  // pH LABORATORIES · Smooth Perfect — liso perfeito
  { id: 'ph-smooth-shampoo', marca: 'ph', colecao: 'ph-smooth', nome: 'Smooth Perfect Shampoo', tamanho: '250 ml', legenda: 'O primeiro passo para o liso perfeito.', descricao: 'Com óleo de monoi e magnólia; limpa e alinha os fios.', uso: '', necessidades: ['frizz'], preco: null, foto: 'ph-smooth-shampoo' },
  { id: 'ph-smooth-cond', marca: 'ph', colecao: 'ph-smooth', nome: 'Smooth Perfect Conditioner', tamanho: '250 ml', legenda: 'Fios alinhados, macios e sem frizz.', descricao: 'Sela a cutícula e prolonga o efeito liso.', uso: '', necessidades: ['frizz'], preco: null, foto: 'ph-smooth-cond' },
  { id: 'ph-smooth-mask', marca: 'ph', colecao: 'ph-smooth', nome: 'Smooth Perfect Mask', tamanho: '', legenda: 'Liso de salão que dura mais.', descricao: 'Máscara alisante com monoi e magnólia.', uso: 'Deixar 5 a 10 min.', necessidades: ['frizz'], preco: null, foto: 'ph-smooth-mask' },
  // pH LABORATORIES · Deep Moisture — hidratação intensa
  { id: 'ph-extra-butter', marca: 'ph', colecao: 'ph-deep', nome: 'Extra Butter Deep Moisture Mask', tamanho: '', legenda: 'Hidratação profunda para cabelos sedentos.', descricao: 'Com manteiga de kokum e rosa.', uso: 'Deixar 5 a 10 min.', necessidades: ['ressecado', 'cachos'], preco: null, foto: 'ph-extra-butter' },
  // pH LABORATORIES · Pure Repair — reparação
  { id: 'ph-pure-repair-shampoo', marca: 'ph', colecao: 'ph-pure', nome: 'Pure Repair Shampoo', tamanho: '', legenda: 'Reparação e hidratação desde a lavagem.', descricao: 'Shampoo com ácido hialurônico para cabelos danificados.', uso: '', necessidades: ['danificado'], preco: null, foto: 'ph-pure-repair-shampoo' },
];

const KITS = [
  { id: 'kit-pos-cor-previa', nome: 'Kit Pós-Cor Previa', chamada: 'Cor de salão por muito mais tempo.', itens: ['previa-keeping-shampoo', 'previa-keeping-cond', 'previa-keeping-mask'], preco: null },
  { id: 'kit-loira-perfeita', nome: 'Kit Loira Perfeita', chamada: 'Loiro frio, sem amarelar.', itens: ['previa-silver-shampoo', 'previa-keeping-cond'], preco: null },
  { id: 'kit-reconstrucao', nome: 'Kit Reconstrução Trufa Branca', chamada: 'Do fio quebradiço ao fio forte.', itens: ['previa-reconstruct-shampoo', 'previa-reconstruct-cond', 'previa-reconstruct-mask', 'previa-biphasic'], preco: null },
  { id: 'kit-couro-cabeludo', nome: 'Kit Couro Cabeludo Equilibrado', chamada: 'Raiz leve por mais tempo.', itens: ['previa-purifying-shampoo', 'previa-purifying-treatment'], preco: null },
  { id: 'kit-antiqueda', nome: 'Kit Força Antiqueda', chamada: 'Força desde a raiz.', itens: ['previa-energising-shampoo', 'previa-tonic-cond', 'previa-energising-lotion'], preco: null },
  { id: 'kit-antifrizz-previa', nome: 'Kit Antifrizz Previa', chamada: 'Fios disciplinados e brilhantes.', itens: ['previa-taming-cond', 'previa-taming-gloss'], preco: null },
  { id: 'kit-cachos', nome: 'Kit Cachos Perfeitos', chamada: 'Definição e hidratação.', itens: ['previa-curl-definer', 'previa-styling-creme', 'ph-extra-butter'], preco: null },
  { id: 'kit-liso-ph', nome: 'Kit Liso Perfeito pH', chamada: 'O liso da progressiva que dura mais.', itens: ['ph-smooth-shampoo', 'ph-smooth-cond', 'ph-smooth-mask'], preco: null },
  { id: 'kit-argan-ph', nome: 'Kit Argan & Keratin pH', chamada: 'Ritual de brilho pós-cor.', itens: ['ph-argan-shampoo', 'ph-argan-mask', 'ph-argan-elixir'], preco: null },
  { id: 'kit-presente', nome: 'Kit Presente Nuovi', chamada: 'Presente que encanta.', itens: ['previa-virtuous-brush', 'ph-argan-elixir'], preco: null },
];
