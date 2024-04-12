// pour pouvoir acceder au code rapidement, aller ligne -> 15300 ou alors reduire les tableaux (cliquer sur la petite flèche)

const targetWords = [
    'abats', 'aboye', 'acces', 'actai', 'adage', 'adret', 'agave', 'agoni', 'aigle', 'aimas', 'airer', 
    'album', 'alios', 'allie', 'alpha', 'alese', 'ambre', 'amour', 'amuis', 'anges', 'annee', 'aphte', 
    'apres', 'ardus', 'arien', 'armat', 'arcon', 'asses', 'atome', 'auges', 'autre', 'avers', 'aviso', 
    'axais', 'ayant', 'aeras', 'agees', 'badin', 'bains', 'banco', 'barbe', 'barre', 'basin', 'baume', 
    'bayer', 'bedon', 'berna', 'bicot', 'bigot', 'bille', 'binat', 'bison', 'bitez', 'blanc', 'blond', 
    'bleme', 'boire', 'bombe', 'booms', 'borts', 'boude', 'boute', 'boxee', 'brans', 'brick', 'brisa', 
    'brout', 'bruni', 'bubon', 'busse', 'butte', 'bafra', 'batit', 'beats', 'benie', 'betel', 'belat', 
    'cabot', 'cades', 'cages', 'calai', 'calos', 'campe', 'canez', 'caoua', 'capte', 'cargo', 'carry', 
    'casat', 'cavas', 'ceins', 'celat', 'cesse', 'chars', 'chiai', 'chipa', 'choix', 'chute', 'cible', 
    'cippe', 'ciste', 'clade', 'clapi', 'clive', 'clown', 'coche', 'codon', 'colin', 'comme', 'copia', 
    'corne', 'cotai', 'cotte', 'coupa', 'couve', 'crado', 'crawl', 'crime', 'cross', 'crema', 'cubas', 
    'cuita', 'culte', 'curry', 'cygne', 'ceans', 'conie', 'dalla', 'damne', 'darne', 'datee', 'dente', 
    'diane', 'digue', 'direz', 'diete', 'dogue', 'dolat', 'dopee', 'doree', 'dotal', 'douce', 'douat', 
    'drave', 'drope', 'duces', 'duper', 'durez', 'debat', 'decru', 'degel', 'demon', 'devia', 'diner', 
    'elfes', 'encra', 'enjeu', 'entre', 'errer', 'esses', 'exigu', 'Emile', 'ecart', 'eclat', 'ecran', 
    'ecule', 'edits', 'egide', 'elime', 'eleis', 'emier', 'emues', 'epars', 'epier', 'epiat', 'epuca', 
    'etage', 'etang', 'etier', 'etuve', 'evide', 'fadai', 'faims', 'fanai', 'faons', 'farts', 'fauve', 
    'facon', 'ferai', 'fessa', 'fibre', 'fieux', 'filas', 'filon', 'fiole', 'fixat', 'flash', 'floua', 
    'flush', 'focal', 'fonce', 'foras', 'forte', 'fouir', 'foxee', 'frein', 'frire', 'froue', 'frole', 
    'fumas', 'furet', 'fusse', 'feves', 'ferus', 'fetas', 'gaffa', 'gaies', 'galon', 'ganse', 'gares', 
    'gaupe', 'gayal', 'geais', 'geles', 'germe', 'gifle', 'gitan', 'glati', 'glene', 'gobes', 'godez', 
    'gonde', 'gouet', 'goute', 'grena', 'griot', 'grues', 'grees', 'gueux', 'guere', 'guepe', 'gatez', 
    'haire', 'halte', 'hapax', 'haros', 'havai', 'havat', 'henry', 'heurt', 'hocha', 'hosto', 'houri', 
    'huche', 'humez', 'huron', 'hater', 'heler', 'hotes', 'idees', 'image', 'impie', 'innee', 'ioder', 
    'irais', 'islam', 'ixias', 'jacte', 'jappa', 'jaspe', 'jains', 'jeter', 'jodla', 'joncs', 'jouie', 
    'joyau', 'jugez', 'jupes', 'juree', 'jesus', 'kavas', 'kicks', 'kores', 'kefir', 'lacte', 'laird', 
    'lampa', 'laper', 'larde', 'latex', 'lavis', 'layee', 'lente', 'lever', 'liait', 'licou', 'lifta', 
    'liiez', 'limat', 'lippu', 'lista', 'litee', 'lobby', 'loden', 'loger', 'looch', 'lotie', 'loues', 
    'loure', 'lovat', 'luges', 'lunch', 'lutas', 'luxai', 'lyric', 'leche', 'legua', 'macis', 'magne', 
    'malis', "man's", 'maori', 'marin', 'maree', 'matez', 'matat', 'melon', 'menus', 'messe', 'meiji', 
    'migre', 'mimat', 'minis', 'mirez', 'misat', 'mitat', 'moche', 'moire', 'mollo', 'moqua', 'morte', 
    'motte', 'moxas', 'muche', 'mugir', 'munir', 'murex', 'mussa', 'mutin', 'males', 'medit', 'megot', 
    'meteo', 'mumes', 'nafes', 'nanar', 'nasal', 'navre', 'nerfs', 'nicha', 'ninas', 'nieme', 'noise', 
    'nopas', 'notas', 'nouer', 'novat', 'nuage', 'nuite', 'neant', 'oblat', 'obeis', 'ocree', 'ogres', 
    'omble', 'ongle', 'optes', 'ordre', 'orner', 'orees', 'osons', 'oubli', 'outra', 'ovnis', 'otait', 
    'paddy', 'pagee', 'palme', 'panax', 'panne', 'papis', 'paria', 'parsi', 'passa', 'pausa', 'pavee', 
    'peaux', 'pelle', 'penny', 'perla', 'peson', 'peuls', 'piafs', 'pifer', 'pigez', 'pilla', 'pinta', 
    'pipit', 'pises', 'piete', 'plant', 'plier', 'plouk', 'pogne', 'poise', 'pomma', 'ponta', 'porno', 
    'posta', 'poule', 'priai', 'priva', 'prose', 'prete', 'pubis', 'pulpe', 'punks', 'putti', 'pamer', 
    'patie', 'peres', 'penis', 'peris', 'petat', 'quasi', 'quota', 'racla', 'radie', 'rages', 'rails', 
    'rames', 'ranci', 'rasai', 'ratas', 'ravie', 'rayon', 'recru', 'redut', 'relis', 'remue', 'renee', 
    'resta', 'rhuma', 'riche', 'riens', 'rimes', 'riper', 'risse', 'rivez', 'robot', 'rodez', 'rompe', 
    'roqua', 'rosis', 'rotin', 'roufs', 'round', 'ruban', 'rugis', 'ruolz', 'russe', 'ralez', 'regne', 
    'recit', 'regla', 'reuni', 'revee', 'sabra', 'sahel', 'salep', 'salol', 'salee', 'saoul', 'saque', 
    'sauge', 'sauts', 'saiga', 'scier', 'scuta', 'selfs', 'semis', 'serai', 'serte', 'sexte', 'siens', 
    'sinon', 'sites', 'skias', 'slips', 'snack', 'soeur', 'soles', 'songe', 'sotch', 'souri', 'spath', 
    'squat', 'stemm', 'strie', 'suage', 'sucer', 'suies', 'sulky', 'surfa', 'suros', 'suede', 'secha', 
    'sevir', 'tabou', 'tagal', 'tales', 'tamis', 'tapai', 'tapon', 'tares', 'tarot', 'taule', 'taxon', 
    'tempe', 'tente', 'tersa', 'thons', 'tibia', 'tille', 'tires', 'tison', 'tiede', 'tokai', 'tomes', 
    'tonie', 'topez', 'toril', 'totos', 'touat', 'trait', 'tridi', 'tripe', 'troua', 'tsars', 'tubat', 
    'tunes', 'tutti', 'typez', 'tates', 'tetas', 'toles', 'ulema', 'urgee', 'usant', 'usure', 'vagin', 
    'vaire', 'vampe', 'varan', 'velds', 'venge', 'verge', 'verve', 'vexer', 'vicie', 'viens', 'viner', 
    'virai', 'visai', 'vitae', 'vocal', 'volai', 'volve', 'voter', 'voues', 'voute', 'velie', 'velez', 
    'vites', 'xenon', 'yucca', 'zibai', 'zippa', 'zonez', 'zelee'
    ]
    
    const dictionary = [
    "abats", "abbes", "abces", "aboie", "abois", "aboli", "abord", "abots", "about", "aboya", "aboye", 
    "abris", "abusa", "abuse", "abeti", "abima", "abime", "accot", "accru", "accus", "acces", "achat", 
    "acide", "acier", "acini", "acmes", "acnes", "acons", "acore", "acres", "actai", "actas", "acter", 
    "actes", "actez", "actif", "actat", "actee", "acere", "acera", "adage", "adent", "adieu", "admet", 
    "admis", "admit", "adnee", "adnes", "adora", "adore", "adret", "adula", "adule", "aequo", "affin", 
    "affut", "agace", "agami", "agape", "agate", "agave", "agaca", "agent", "aghas", "agile", "agios", 
    "agira", "agita", "agite", "agnat", "agoni", "agora", "agres", "agrea", "agree", "aguis", "ahana", 
    "ahane", "ahans", "ahuri", "ai-je", "aiche", "aidai", "aidas", "aider", "aides", "aidez", "aidat", 
    "aidee", "aient", "aigle", "aigre", "aigri", "aigus", "aigue", "ailes", "ailla", "aille", "ailee", 
    "aimai", "aimas", "aimer", "aimes", "aimez", "aimat", "aimee", "aines", "ainsi", "airai", "airas", 
    "airer", "aires", "airez", "airat", "aises", "aisys", "aisee", "ajonc", "ajour", "ajout", "album", 
    "aldin", "aldol", "aleph", "alfas", "algie", "algol", "algue", "alias", "alibi", "alios", "alise", 
    "alita", "alite", "alize", "allai", "allas", "aller", "allez", "allia", "allie", "allat", "allee", 
    "alles", "almee", "alors", "alose", "aloes", "alpax", "alpes", "alpha", "alpin", "alter", "altos", 
    "aluna", "alune", "aluni", "aluns", "alvin", "alyte", "alese", "aleas", "alesa", "alene", "amant", 
    "amati", "ambla", "amble", "ambon", "ambra", "ambre", "amena", "amene", "amers", "amibe", "amict", 
    "amide", "amies", "amine", "amont", "amour", "amphi", "ample", "ampli", "amura", "amure", "amusa", 
    "amuse", "amuie", "amuir", "amuis", "amyle", "amere", "anale", "anaux", "anche", "ancra", "ancre", 
    "andin", "aneth", "anges", "angle", "angon", "angor", "anima", "anime", "anion", "anisa", "anise", 
    "annal", "annee", "anode", "anses", "ansee", "antan", "antes", "antre", "aorte", "aouta", "aoute", 
    "aphte", "apiol", "apion", "aplat", "apnee", "apode", "appas", "appel", "appui", "appat", "apres", 
    "aptes", "apura", "apure", "arabe", "arasa", "arase", "arbre", "arche", "ardue", "ardus", "arecs", 
    "argas", "argon", "argot", "argua", "argue", "argus", "arias", "aride", "arien", "arisa", "arise", 
    "armai", "armas", "armer", "armes", "armet", "armez", "armon", "armat", "armee", "arqua", "arque", 
    "arret", "arsin", "artel", "arums", "aryen", "aryle", "arcon", "arene", "arete", "arome", "as-tu", 
    "asile", "aspes", "aspic", "asque", "assai", "asses", "assez", "assis", "assit", "aster", "astis", 
    "astre", "athee", "atlas", "atoll", "atome", "atone", "atour", "atout", "atele", "aubes", "aubin", 
    "aucun", "audio", "audit", "auges", "auget", "aulne", "aunes", "aurai", "auras", "aurez", "aussi", 
    "autel", "autos", "autre", "avais", "avait", "avala", "avale", "avals", "avant", "avare", "avens", 
    "avenu", "avers", "aveux", "avide", "aviez", "avili", "avina", "avine", "avion", "avisa", "avise", 
    "aviso", "aviva", "avive", "avoir", "avons", "avoua", "avoue", "avril", "avere", "avera", "axais", 
    "axait", "axant", "axent", "axera", "axiez", "axile", "axone", "axons", "axees", "ayant", "ayons", 
    "azote", "azura", "azure", "azurs", "azyme", "aedes", "aeres", "aerai", "aeras", "aerer", "aerez", 
    "aerat", "aeree", "ainee", "aieul", "aieux", "aioli", "a-pic", "agees", "anier", "anons", "atres",
    "babas", "babil", "babys", "bacon", "bacul", "badge", "badin", "baffa", "baffe", "bagad", "bagne", 
    "bagou", "bagua", "bague", "bahut", "baies", "bains", "baisa", "baise", "balai", "balla", "balle", 
    "balsa", "balte", "bales", "banal", "banco", "bancs", "banda", "bande", "bangs", "banjo", "banna", 
    "banne", "banni", "barba", "barbe", "barbu", "barda", "barde", "bards", "barge", "baril", "barns", 
    "baron", "barra", "barre", "barri", "barye", "basai", "basal", "basas", "baser", "bases", "basez", 
    "basic", "basin", "basse", "baste", "basat", "basee", "batik", "batte", "battu", "bauds", "bauge", 
    "baume", "bavai", "bavas", "baver", "baves", "bavez", "bavat", "bavee", "bayai", "bayas", "bayer", 
    "bayes", "bayez", "bayou", "bayat", "bazar", "beauf", "beaux", "becta", "becte", "bedon", "beige", 
    "belge", "belle", "belon", "benne", "benet", "berce", "berge", "berme", "berna", "berne", "berca", 
    "bette", "beurs", "biais", "bibis", "bible", "bicha", "biche", "bicot", "bides", "bidet", "bidon", 
    "biefs", "biens", "biffa", "biffe", "bigla", "bigle", "bigot", "bigre", "bigue", "bijou", "bilai", 
    "bilan", "bilas", "biler", "biles", "bilez", "bille", "bills", "bilat", "bilee", "binai", "binas", 
    "biner", "bines", "binez", "bingo", "binat", "binee", "bique", "birbe", "bisai", "bisas", "biser", 
    "bises", "biset", "bisez", "bison", "bisou", "bissa", "bisse", "bisat", "bisee", "bitai", "bitas", 
    "biter", "bites", "bitez", "bitos", "bitta", "bitte", "bitat", "bitee", "bizut", "biere", "black", 
    "blair", "blanc", "blaps", "blasa", "blase", "bleds", "blets", "bleue", "bleui", "bleus", "blocs", 
    "blond", "blues", "bluet", "bluff", "bluta", "blute", "blama", "blame", "blese", "blesa", "bleme", 
    "blemi", "bobos", "bocal", "boche", "bocks", "boeuf", "bogie", "bogue", "boira", "boire", "boisa", 
    "boise", "boita", "boite", "boive", "boldo", "bolet", "bolee", "bomba", "bombe", "bonda", "bonde", 
    "bondi", "bonds", "bonis", "bonne", "bonte", "bonus", "bonze", "booms", "boots", "boras", "borax", 
    "borda", "borde", "bords", "bores", "borna", "borne", "borts", "bosco", "bossa", "bosse", "bossu", 
    "botes", "botta", "botte", "boucs", "bouda", "boude", "boues", "bouge", "bouif", "boula", "boule", 
    "boume", "bourg", "bouse", "bouta", "boute", "bouts", "bouee", "bovin", "boxai", "boxas", "boxer", 
    "boxes", "boxez", "boxat", "boxee", "boyau", "boete", "brada", "brade", "braie", "brais", "brait", 
    "brama", "brame", "brans", "brasa", "brase", "brava", "brave", "bravo", "braya", "braye", "break", 
    "brefs", "brick", "brida", "bride", "bries", "brifa", "brife", "brima", "brime", "brins", "brios", 
    "brisa", "brise", "brocs", "broda", "brode", "broie", "brome", "brook", "broum", "brous", "brout", 
    "broya", "broye", "bruie", "bruir", "bruis", "bruit", "bruma", "brume", "brune", "bruni", "bruns", 
    "brute", "bruts", "brele", "breme", "breve", "brela", "brula", "brule", "bubon", "buggy", "bugle", 
    "bulbe", "bulle", "bures", "burin", "buron", "buscs", "buses", "busse", "buste", "butai", "butas", 
    "buter", "butes", "butez", "butin", "butor", "butta", "butte", "butat", "butee", "buvez", "buvee", 
    "buees", "bacha", "bache", "bacla", "bacle", "bafra", "bafre", "batai", "batas", "bater", "bates", 
    "batez", "batie", "batir", "batis", "batit", "baton", "batat", "batee", "begue", "beque", "beais", 
    "beait", "beant", "beate", "beats", "bebes", "becot", "beent", "beera", "begum", "beiez", "bekes", 
    "bemol", "benef", "benie", "benin", "benir", "benis", "benit", "beons", "bequa", "beret", "beryl", 
    "besef", "betel", "beton", "bevue", "becha", "beche", "belai", "belas", "beler", "beles", "belez", 
    "belat", "belee", "betas", "betes", "bomes", "bucha", "buche", "bumes", "caban", "cabas", "cabot", 
    "cabra", "cabre", "cabri", "cabus", "cacao", "cacas", "cacha", "cache", "caddy", "cades", "cadet", 
    "cadis", "cadra", "cadre", "caduc", "cafre", "cafta", "cafte", "cafes", "cages", "caget", "cagna", 
    "cagne", "cagot", "cahot", "cairn", "cajou", "cajun", "cakes", "calai", "calao", "calas", "caler", 
    "cales", "calez", "calfs", "calma", "calme", "calmi", "calos", "calot", "calta", "calte", "calva", 
    "calat", "calee", "camer", "cames", "campa", "campe", "camps", "camus", "camee", "canai", "canal", 
    "canas", "candi", "caner", "canes", "canez", "canif", "canin", "canna", "canne", "canon", "canot", 
    "canoe", "canut", "canat", "caoua", "capai", "capas", "caper", "capes", "capez", "capon", "capot", 
    "cappa", "capta", "capte", "capat", "capea", "capee", "caqua", "caque", "carat", "carda", "carde", 
    "carex", "cargo", "caria", "carie", "caris", "carma", "carme", "carne", "carpe", "carra", "carre", 
    "carry", "carte", "casai", "casas", "caser", "cases", "casez", "cassa", "casse", "caste", "casat", 
    "casee", "catch", "catin", "catir", "catis", "cauri", "causa", "cause", "cavai", "cavas", "caver", 
    "caves", "cavet", "cavez", "cavat", "cavee", "caids", "caieu", "cedex", "ceins", "ceint", "celai", 
    "celas", "celer", "celez", "cella", "celle", "celte", "celui", "celat", "celee", "celes", "cense", 
    "cents", "cerce", "cerfs", "cerna", "cerne", "cessa", "cesse", "ceste", "cette", "chahs", "chair", 
    "chais", "champ", "chant", "chaos", "chape", "chars", "chats", "chaud", "chaut", "chaux", "check", 
    "chefs", "cheik", "chenu", "chers", "chiai", "chias", "chics", "chien", "chier", "chies", "chiez", 
    "china", "chine", "chiot", "chipa", "chipe", "chips", "chiat", "chiee", "chocs", "choie", "choir", 
    "chois", "choit", "choix", "chopa", "chope", "chose", "chott", "choux", "choya", "choye", "chues", 
    "chuta", "chute", "chyle", "chyme", "chale", "chere", "chera", "cheri", "chene", "choma", "chome", 
    "cible", "cidre", "ciels", "cieux", "cigue", "cilie", "cilla", "cille", "cimes", "cines", "cippe", 
    "cirai", "ciras", "cirer", "cires", "cirez", "ciron", "cirre", "cirat", "ciree", "ciste", "citai", 
    "citas", "citer", "cites", "citez", "citat", "citee", "civet", "civil", "clade", "claie", "clair", 
    "clama", "clame", "clamp", "clams", "clans", "clapa", "clape", "clapi", "clava", "clave", "clebs", 
    "clefs", "clerc", "clics", "clins", "clips", "cliva", "clive", "clodo", "clone", "clope", "clora", 
    "clore", "close", "cloua", "cloue", "clous", "clown", "clubs", "cluse", "coach", "coati", "cobol", 
    "cobra", "cobea", "cocas", "cocha", "coche", "cocon", "cocos", "cocus", "codai", "codas", "coder", 
    "codes", "codex", "codez", "codon", "codat", "codee", "coeur", "cogna", "cogne", "cohue", "coing", 
    "coins", "coite", "colin", "colis", "colla", "colle", "colon", "colts", "colza", "comas", "combe", 
    "comma", "comme", "comte", "conde", "conga", "conge", "connu", "conta", "conte", "concu", "copal", 
    "copia", "copie", "copra", "copte", "coqua", "coque", "coran", "corda", "corde", "corna", "corne", 
    "cornu", "coron", "corps", "corsa", "corse", "cossa", "cosse", "cossu", "cosys", "cotai", "cotas", 
    "coter", "cotes", "cotez", "cotie", "cotir", "cotis", "cotit", "coton", "cotte", "cotat", "cotee", 
    "couac", "couda", "coude", "couds", "couic", "coula", "coule", "coupa", "coupe", "coups", "coure", 
    "cours", "court", "couru", "couse", "cousu", "couva", "couve", "coxal", "coyau", "coita", "coits", 
    "couta", "coute", "couts", "crabe", "crack", "crado", "craie", "crama", "crame", "crana", "crane", 
    "crans", "crase", "crash", "crave", "crawl", "credo", "creux", "creva", "creve", "criai", "crias", 
    "crier", "cries", "criez", "crime", "crins", "crise", "criat", "criee", "crocs", "croie", "crois", 
    "croit", "croix", "cross", "cruel", "crues", "creme", "crene", "creai", "creas", "creer", "crees", 
    "creez", "crema", "crena", "crepi", "crepu", "creat", "creee", "crepa", "crepe", "crete", "cubai", 
    "cubas", "cuber", "cubes", "cubez", "cubat", "cubee", "cuira", "cuire", "cuirs", "cuise", "cuita", 
    "cuite", "cuits", "culai", "culas", "culer", "cules", "culex", "culez", "culot", "culte", "culat", 
    "culee", "cumin", "cumul", "curai", "curas", "curer", "cures", "curez", "curry", "curat", "curee", 
    "cuvez", "cuvat", "cuvee", "cuves", "cyans", "cycas", "cycle", "cygne", "czars", "cabla", "cable", 
    "calin", "capre", "cedes", "cedre", "cenes", "cepes", "ceans", "cedai", "cedas", "ceder", "cedez", 
    "cedat", "cedee", "cerat", "cesar", "cones", "conie", "conir", "conis", "conit", "dadas", "dagua", 
    "dague", "dahir", "daims", "daine", "dalla", "dalle", "dalot", "damai", "daman", "damas", "damer", 
    "dames", "damez", "damna", "damne", "damat", "damee", "dandy", "dansa", "danse", "darce", "darda", 
    "darde", "dards", "darne", "darse", "datai", "datas", "dater", "dates", "datez", "datif", "datte", 
    "datat", "datee", "dauba", "daube", "degre", "delco", "delta", "demie", "demis", "dense", "dents", 
    "dente", "derby", "derme", "derny", "dette", "deuil", "devez", "devin", "devis", "devra", "diane", 
    "diapo", "dicos", "dicta", "dicte", "dieux", "diffa", "digit", "digne", "digon", "digue", "dilua", 
    "dilue", "dinar", "dinde", "dingo", "diode", "dirai", "diras", "dires", "direz", "disco", "dises", 
    "disse", "dites", "divan", "divas", "divin", "divis", "diese", "diete", "djain", "djinn", "docks", 
    "docte", "dodos", "dodue", "dodus", "doges", "dogme", "dogue", "doigt", "doive", "dolai", "dolas", 
    "dolce", "doler", "doles", "dolez", "dolic", "dolat", "dolee", "donna", "donne", "dopai", "dopas", 
    "doper", "dopes", "dopez", "dopat", "dopee", "dorai", "doras", "dorer", "dores", "dorez", "doris", 
    "dorme", "dormi", "dorat", "doree", "dosai", "dosas", "doser", "doses", "dosez", "dosse", "dosat", 
    "dosee", "dotai", "dotal", "dotas", "doter", "dotes", "dotez", "dotat", "dotee", "douai", "douar", 
    "douas", "douce", "douci", "douer", "douez", "doums", "douro", "douta", "doute", "douve", "douze", 
    "douat", "douee", "doues", "doyen", "draie", "drain", "drame", "drapa", "drape", "draps", "drave", 
    "draya", "draye", "drill", "dring", "drink", "driva", "drive", "droit", "dropa", "drope", "drops", 
    "drues", "drupe", "drege", "drole", "duale", "duaux", "ducal", "ducat", "duces", "duche", "duels", 
    "duite", "duits", "dulie", "dunes", "duodi", "dupai", "dupas", "duper", "dupes", "dupez", "dupat", 
    "dupee", "durai", "duras", "durci", "durer", "dures", "durez", "durit", "durat", "duree", "dusse", 
    "duvet", "dyade", "dzeta", "deche", "demes", "debat", "debet", "debit", "debut", "decan", "decas", 
    "dechu", "decis", "decor", "decri", "decru", "deces", "dedia", "dedie", "dedis", "dedit", "defia", 
    "defie", "defis", "defit", "degel", "degat", "deite", "delai", "delia", "delie", "delit", "delot", 
    "demet", "demit", "demon", "denia", "denie", "denis", "denua", "denue", "depit", "deplu", "depot", 
    "desir", "devia", "devie", "devot", "devet", "decue", "decus", "decut", "dimes", "dinai", "dinas", 
    "diner", "dines", "dinez", "dinat", "domes", "dumes", "dutes", "effet", "eider", "elbot", "elfes", 
    "elles", "embat", "embua", "embue", "embus", "empan", "empli", "encan", "encas", "encra", "encre", 
    "endos", "enfer", "enfeu", "enfin", "enfla", "enfle", "enfui", "engin", "enjeu", "enlia", "enlie", 
    "ennui", "entai", "entas", "enter", "entes", "entez", "entra", "entre", "entat", "entee", "envia", 
    "envie", "envoi", "envol", "ergot", "errai", "erras", "errer", "erres", "errez", "errat", "es-tu", 
    "escha", "esche", "escot", "espar", "essai", "esses", "essor", "ester", "estoc", "euros", "eusse", 
    "exact", "exclu", "exces", "exige", "exigu", "exila", "exile", "exils", "exode", "expia", "expie", 
    "extra", "eumes", "eutes", "Emile", "eches", "ebahi", "ebats", "eboua", "eboue", "ebene", "ecala", 
    "ecale", "ecang", "ecart", "ecati", "echec", "echer", "echos", "echue", "echus", "echut", "ecima", 
    "ecime", "eclat", "eclos", "eclot", "ecole", "ecopa", "ecope", "ecora", "ecore", "ecots", "ecote", 
    "ecran", "ecria", "ecrie", "ecrin", "ecris", "ecrit", "ecrou", "ecrue", "ecrus", "ecula", "ecule", 
    "ecuma", "ecume", "ecura", "ecure", "edams", "edens", "edile", "edita", "edite", "edits", "egaie", 
    "egala", "egale", "egara", "egard", "egare", "egaux", "egaya", "egaye", "egide", "egout", "egeen", 
    "elans", "elave", "eleva", "eleve", "elida", "elide", "elima", "elime", "elira", "elire", "elise", 
    "elite", "eloge", "eluda", "elude", "elues", "elegi", "eleis", "email", "emana", "emane", "emaux", 
    "emeri", "emeus", "emeut", "emiai", "emias", "emier", "emies", "emiez", "emirs", "emise", "emiat", 
    "emiee", "emois", "emoud", "emous", "emues", "emula", "emule", "enoua", "enoue", "epair", "epais", 
    "epala", "epale", "epand", "epars", "epata", "epate", "epave", "epela", "epele", "ephod", "epiai", 
    "epias", "epice", "epier", "epies", "epieu", "epiez", "epige", "epila", "epile", "epina", "epine", 
    "epite", "epiat", "epica", "epiee", "epode", "epoux", "epris", "eprit", "epuce", "epura", "epure", 
    "epuca", "epees", "equin", "eraie", "eraya", "eraye", "erige", "erine", "eroda", "erode", "etage", 
    "etaie", "etain", "etais", "etait", "etala", "etale", "etals", "etama", "etame", "etang", "etant", 
    "etape", "etats", "etaux", "etaya", "etaye", "etend", "eteuf", "ether", "etier", "etiez", "etira", 
    "etire", "etocs", "etole", "etron", "etude", "etuis", "etuva", "etuve", "eteta", "etete", "evada", 
    "evade", "evasa", "evase", "eveil", "event", "evida", "evide", "evier", "evita", "evite", "evohe", 
    "etres", "fable", "faces", "facho", "facto", "fadai", "fadas", "fader", "fades", "fadez", "fados", 
    "fadat", "fadee", "fagne", "fagot", "faims", "faire", "faite", "faits", "fakir", "fallu", "falot", 
    "falun", "famee", "fames", "fanai", "fanal", "fanas", "faner", "fanes", "fanez", "fange", "fanon", 
    "fanat", "fanee", "faons", "farad", "farce", "farci", "farda", "farde", "fards", "faros", "farta", 
    "farte", "farts", "fasce", "fasse", "faste", "fatal", "fatma", "fatum", "faune", "fauta", "faute", 
    "fauve", "favus", "faxai", "faxas", "faxer", "faxes", "faxez", "faxat", "faxee", "fayot", "facon", 
    "faine", "feins", "feint", "femme", "fende", "fends", "fendu", "fenil", "fente", "ferai", "feras", 
    "ferez", "ferla", "ferle", "ferma", "ferme", "ferra", "ferre", "ferry", "fessa", "fesse", "fessu", 
    "feues", "feuil", "feula", "feule", "fiais", "fiait", "fiant", "fibre", "ficha", "fiche", "fichu", 
    "ficus", "fiefs", "fiels", "fient", "fiera", "fiers", "fieux", "fifre", "figea", "figer", "figes", 
    "figez", "figue", "figee", "fiiez", "filai", "filas", "filer", "files", "filet", "filez", "filin", 
    "fille", "filma", "filme", "films", "filon", "filou", "filat", "filee", "final", "fines", "finie", 
    "finir", "finis", "finit", "fiole", "fions", "firme", "fiscs", "fisse", "fixai", "fixas", "fixer", 
    "fixes", "fixez", "fixat", "fixee", "fiere", "fiees", "fjeld", "fjord", "flair", "flanc", "flans", 
    "flapi", "flash", "flein", "fleur", "flics", "flint", "flirt", "flood", "flops", "flore", "flots", 
    "floua", "floue", "flous", "fluai", "fluas", "fluer", "flues", "fluet", "fluez", "fluor", "flush", 
    "fluxa", "fluxe", "fluat", "fluee", "flana", "flane", "fleau", "fluta", "flute", "focal", "foehn", 
    "foies", "foins", "foira", "foire", "folie", "folio", "folks", "folle", "fonce", "fonda", "fonde", 
    "fonds", "fondu", "fonte", "fonts", "fonca", "foots", "forai", "foras", "force", "forci", "forer", 
    "fores", "foret", "forez", "forge", "forma", "forme", "forte", "forts", "forum", "forat", "forca", 
    "foree", "fosse", "fouet", "fouge", "fouie", "fouir", "fouis", "fouit", "foula", "foule", "fours", 
    "foute", "foutu", "fouee", "fovee", "foxee", "foxes", "foyer", "fracs", "fraie", "frais", "franc", 
    "frape", "fraya", "fraye", "frein", "frets", "freux", "frics", "frigo", "frima", "frime", "fripa", 
    "fripe", "frira", "frire", "frisa", "frise", "frite", "frits", "fritz", "frocs", "froid", "front", 
    "froua", "froue", "fruit", "frere", "frete", "fremi", "freon", "freta", "frele", "frene", "frola", 
    "frole", "fucus", "fuels", "fugua", "fugue", "fuies", "fuira", "fuite", "fulls", "fumai", "fumas", 
    "fumer", "fumes", "fumet", "fumez", "fumat", "fumee", "funin", "funky", "furax", "furet", "furia", 
    "furie", "fusai", "fusas", "fusel", "fuser", "fuses", "fusez", "fusil", "fusse", "fusat", "fusee", 
    "futur", "futee", "futes", "fuyez", "facha", "fache", "feces", "feves", "feale", "feaux", "fecal", 
    "felin", "felon", "femur", "ferir", "ferie", "ferue", "ferus", "fetus", "felai", "felas", "feler", 
    "feles", "felez", "felat", "felee", "fetai", "fetas", "feter", "fetes", "fetez", "fetat", "fetee", 
    "fimes", "fites", "gades", "gadin", "gaffa", "gaffe", "gagas", "gagea", "gager", "gages", "gagez", 
    "gagna", "gagne", "gagee", "gaies", "gaina", "gaine", "gains", "galas", "galba", "galbe", "gales", 
    "galet", "gallo", "galon", "galop", "gamba", "gambe", "gamet", "gamin", "gamme", "ganga", "gangs", 
    "gansa", "ganse", "ganta", "gante", "gants", "garai", "garas", "garce", "garda", "garde", "garer", 
    "gares", "garez", "garni", "garou", "garat", "garee", "gatte", "gaude", "gaula", "gaule", "gaupe", 
    "gaurs", "gauss", "gavai", "gavas", "gaver", "gaves", "gavez", "gavat", "gavee", "gayal", "gazai", 
    "gazas", "gazer", "gazes", "gazez", "gazon", "gazat", "gazee", "gaiac", "geais", "gecko", "geins", 
    "geint", "gelai", "gelas", "geler", "gelez", "gelat", "gelee", "geles", "gemma", "gemme", "genet", 
    "genou", "genre", "gerba", "gerbe", "gerce", "germa", "germe", "gerca", "gesse", "geste", "geole", 
    "gibet", "gibus", "gicla", "gicle", "gifla", "gifle", "gigot", "gigue", "gilde", "gilet", "gille", 
    "girie", "girls", "giron", "gisez", "gitan", "giton", "givra", "givre", "glace", "glana", "gland", 
    "glane", "glapi", "glass", "glati", "glaca", "globe", "glome", "glosa", "glose", "gluau", "gluis", 
    "glume", "glebe", "glene", "gnome", "gnons", "gnose", "gnous", "gnole", "goals", "gobai", "gobas", 
    "gober", "gobes", "gobez", "gobie", "gobat", "gobee", "godai", "godas", "goder", "godes", "godet", 
    "godez", "godat", "goglu", "gogos", "golfe", "golfs", "gombo", "gomma", "gomme", "gonda", "gonde", 
    "gonds", "gongs", "gonze", "gords", "goret", "gorge", "gosse", "goton", "gouda", "gouet", "gouge", 
    "goule", "goulu", "goums", "goura", "gourd", "goure", "goyim", "gouta", "goute", "gouts", "grade", 
    "grain", "grand", "grava", "grave", "gravi", "grecs", "green", "grena", "grenu", "grene", "greva", 
    "greve", "grief", "grill", "grils", "grima", "grime", "griot", "grisa", "grise", "grive", "grogs", 
    "groin", "grole", "groom", "group", "gruau", "grues", "gruge", "grume", "grace", "grebe", "grege", 
    "grese", "greai", "greas", "greer", "grees", "greee", "greez", "gresa", "great", "grela", "grele", 
    "guais", "guano", "guets", "gueux", "guida", "guide", "guipa", "guipe", "guise", "guppy", "gurus", 
    "guzla", "guede", "guere", "guete", "gueai", "gueas", "gueer", "guees", "gueez", "gueri", "gueat", 
    "gueee", "guepe", "gypse", "gyrin", "gable", "gacha", "gache", "gatai", "gatas", "gater", "gates", 
    "gatez", "gatat", "habit", "habla", "hable", "hacha", "hache", "hadji", "haies", "haine", "haire", 
    "halai", "halas", "halbi", "haler", "hales", "halez", "halle", "halls", "halos", "halte", "halva", 
    "halat", "halee", "hamac", "hampe", "hanap", "hanse", "hanta", "hante", "hapax", "happa", "happe", 
    "haras", "harda", "harde", "hardi", "harem", "harki", "harle", "haros", "harpa", "harpe", "harts", 
    "hasch", "hases", "hasts", "haste", "haute", "hauts", "havai", "havas", "haver", "haves", "havez", 
    "havie", "havir", "havis", "havit", "havre", "havat", "havee", "hayon", "haiks", "haiku", "haira", 
    "hecto", "hello", "henni", "henne", "henry", "herba", "herbe", "herbu", "herpe", "hersa", "herse", 
    "hertz", "heure", "heurs", "heurt", "hi-fi", "hibou", "hindi", "hippy", "hissa", "hisse", "hiver", 
    "hobby", "hocco", "hocha", "hoche", "hoirs", "homes", "homme", "homos", "honni", "honte", "horde", 
    "horst", "hosto", "hotte", "houai", "houas", "houer", "houes", "houez", "houka", "houle", "hourd", 
    "houri", "houat", "houee", "hoyau", "huais", "huait", "huant", "huard", "huart", "hucha", "huche", 
    "huent", "huera", "huiez", "huila", "huile", "humai", "humas", "humer", "humes", "humez", "humus", 
    "humat", "humee", "hunes", "huons", "huppe", "hures", "hurla", "hurle", "huron", "hutte", "huees", 
    "hydne", "hydre", "hymen", "hymne", "hyene", "hatai", "hatas", "hater", "hates", "hatez", "hatif", 
    "hatat", "hatee", "heles", "heres", "helai", "helas", "heler", "helez", "helix", "helat", "helee", 
    "heron", "heros", "hevea", "hetre", "hotel", "hotes", "iambe", "ibere", "ichor", "ictus", "icone", 
    "idiot", "idole", "ideal", "ideel", "idees", "igloo", "ignee", "ignes", "igues", "ilion", "ilote", 
    "ileal", "ileon", "ileus", "image", "imago", "imams", "imbue", "imbus", "imide", "imita", "imite", 
    "immun", "imper", "impie", "impur", "impot", "incas", "index", "indue", "indus", "infra", "infus", 
    "inlay", "innee", "innes", "inoui", "input", "inter", "intis", "inuit", "inule", "iodai", "iodas", 
    "ioder", "iodes", "iodez", "iodla", "iodle", "iodat", "iodee", "ioula", "ioule", "ipeca", "irais", 
    "irait", "iriez", "irisa", "irise", "irone", "irons", "iront", "isard", "isbas", "islam", "isola", 
    "isole", "issue", "issus", "items", "itere", "itera", "iules", "ivres", "ixias", "ixode", "ilien", 
    "ilots", "jabla", "jable", "jabot", "jacks", "jacot", "jacta", "jacte", "jacee", "jades", "jadis", 
    "jalap", "jales", "jalon", "jambe", "jante", "japon", "jappa", "jappe", "jarde", "jarre", "jasai", 
    "jasas", "jaser", "jases", "jasez", "jaspa", "jaspe", "jasat", "jasee", "jatte", "jauge", "jaune", 
    "jauni", "javas", "javel", "jaina", "jains", "jeans", "jeeps", "jenny", "jerez", "jerka", "jerke", 
    "jerks", "jetai", "jetas", "jeter", "jetez", "jeton", "jette", "jetat", "jetee", "jetes", "jeudi", 
    "jeune", "jeuna", "jodla", "jodle", "joies", "joins", "joint", "joker", "jolie", "jolis", "jonce", 
    "jonca", "joncs", "jotas", "jouai", "joual", "jouas", "jouer", "joues", "jouet", "jouez", "jougs", 
    "jouie", "jouir", "jouis", "jouit", "joule", "jours", "jouta", "joute", "jouat", "jouee", "joyau", 
    "jubes", "jucha", "juche", "judas", "judos", "jugal", "jugea", "juger", "juges", "jugez", "jugee", 
    "juifs", "juill", "juive", "julep", "jules", "jumbo", "jumel", "junte", "jupes", "jupon", "jurai", 
    "juras", "jurat", "jurer", "jures", "jurez", "juron", "jurys", "juree", "juste", "jusee", "jutai", 
    "jutas", "juter", "jutes", "jutez", "jutat", "jutee", "jesus", "kacha", "kache", "kakis", "kalis", 
    "kamis", "kapok", "kappa", "karma", "karts", "kavas", "kawas", "kayac", "kayak", "kendo", "ketch", 
    "khans", "khats", "khmer", "khols", "kicks", "kiefs", "kikis", "kilos", "kilts", "kiwis", "knout", 
    "koala", "koine", "kolas", "kores", "kraal", "krach", "kraft", "kraks", "kriss", "ksour", "kurde", 
    "kyrie", "kyste", "kefir", "kepis", "label", "labie", "labre", "lacer", "laces", "lacet", "lacez", 
    "lacis", "lacte", "lacee", "ladin", "ladre", "lagon", "laide", "laids", "laies", "laina", "laine", 
    "laird", "laits", "laite", "laize", "lamai", "lamas", "lamer", "lames", "lamez", "lamie", "lampa", 
    "lampe", "lamat", "lamee", "lance", "lande", "lange", "lanca", "lapai", "lapas", "laper", "lapes", 
    "lapez", "lapin", "lapis", "lapat", "lapee", "laqua", "laque", "larda", "larde", "lards", "large", 
    "largo", "larme", "larve", "laser", "lassa", "lasse", "lasso", "latex", "latin", "latta", "latte", 
    "laure", "lavai", "lavas", "laver", "laves", "lavez", "lavis", "lavat", "lavee", "layai", "layas", 
    "layer", "layes", "layez", "layon", "layat", "layee", "lazzi", "lacai", "lacas", "lacat", "laics", 
    "laius", "lebel", "ledit", "lemme", "lente", "lento", "lents", "lesta", "leste", "lests", "leude", 
    "leurs", "levai", "levas", "lever", "levez", "levat", "levee", "leves", "lexie", "lexis", "lecon", 
    "liage", "liais", "liait", "liane", "liant", "liard", "liber", "libre", "lices", "licha", "liche", 
    "licol", "licou", "lidos", "lieds", "liens", "lient", "liera", "lieue", "lieur", "lieus", "lieux", 
    "lifta", "lifte", "lifts", "liges", "ligie", "ligna", "ligne", "ligot", "ligua", "ligue", "liiez", 
    "lilas", "limai", "liman", "limas", "limbe", "limer", "limes", "limez", "limon", "limat", "limee", 
    "liner", "linga", "linge", "links", "linon", "linos", "lions", "lippe", "lippu", "lirai", "liras", 
    "lires", "lirez", "liron", "lises", "lisez", "lissa", "lisse", "lista", "liste", "litai", "litas", 
    "liter", "lites", "litez", "litho", "litre", "litat", "litee", "liure", "lives", "livet", "livra", 
    "livre", "liege", "liees", "lobai", "lobas", "lobby", "lober", "lobes", "lobez", "lobat", "lobee", 
    "local", "locha", "loche", "lochs", "loden", "loess", "lofai", "lofas", "lofer", "lofes", "lofez", 
    "lofts", "lofat", "logea", "loger", "loges", "logez", "logis", "logos", "logee", "loirs", "lolos", 
    "longe", "longs", "looch", "loofa", "looks", "lopin", "loqua", "loque", "loran", "lords", "loris", 
    "lotes", "lotie", "lotir", "lotis", "lotit", "lotos", "lotte", "lotus", "louai", "louas", "louer", 
    "loues", "louez", "loufa", "loufe", "louis", "loupa", "loupe", "loups", "loura", "lourd", "loure", 
    "louva", "louve", "louat", "louee", "lovai", "lovas", "lover", "loves", "lovez", "lovat", "lovee", 
    "loyal", "loyer", "lubie", "lucre", "lueur", "luffa", "lugea", "luger", "luges", "lugez", "luira", 
    "luire", "luise", "luite", "luits", "lulus", "lumen", "lumps", "lunch", "lundi", "lunes", "lunee", 
    "lupin", "lupus", "luron", "lusin", "lusse", "lutai", "lutas", "luter", "lutes", "lutez", "luths", 
    "lutin", "lutta", "lutte", "lutat", "lutee", "luxai", "luxas", "luxer", "luxes", "luxez", "luxat", 
    "luxee", "lycra", "lycee", "lyres", "lyric", "lysai", "lysas", "lysat", "lyser", "lyses", "lysez", 
    "lysee", "lacha", "lache", "leche", "leges", "legue", "lepre", "leses", "levre", "lecha", "legal", 
    "legat", "leger", "legua", "lerot", "lesai", "lesas", "leser", "lesat", "lesee", "letal", "lumes",
    "Macho", "macis", "macla", "macle", "macre", "madre", "mafia", "mages", "magie", "magma", "magna", 
    "magne", "magot", "maies", "mails", "mains", "maint", "maire", "major", "makis", "malin", "malis", 
    "malle", "malta", "malte", "malts", "malus", "maman", "mambo", "mamie", "mammy", "man's", "manas", 
    "manda", "mande", "mange", "mania", "manie", "manne", "manse", "mante", "maori", "maoux", "maqua", 
    "maque", "marcs", "mardi", "mares", "marge", "maria", "marie", "marin", "maris", "marks", "marli", 
    "marna", "marne", "marra", "marre", "marri", "marte", "maree", "maser", "massa", "masse", "mataf", 
    "matai", "matas", "match", "mater", "mates", "matez", "maths", "matie", "matin", "matir", "matis", 
    "matit", "maton", "matou", "matte", "matat", "matee", "maure", "mauve", "mayas", "mayen", "mayes", 
    "mazer", "macon", "maias", "melon", "menai", "menas", "mener", "menez", "menin", "mense", "mente", 
    "menti", "menue", "menus", "menat", "menee", "menes", "merci", "merda", "merde", "merle", "merlu", 
    "mesas", "messe", "mette", "meula", "meule", "meure", "meurs", "meurt", "meute", "meuve", "mezzo", 
    "meiji", "miaou", "micas", "miche", "micro", "midis", "miels", "miens", "mieux", "migra", "migre", 
    "milan", "miles", "mille", "mimai", "mimas", "mimer", "mimes", "mimez", "mimis", "mimat", "mimee", 
    "minai", "minas", "mince", "minci", "miner", "mines", "minet", "minez", "minis", "minot", "minou", 
    "minus", "minat", "minee", "mirai", "miras", "mirer", "mires", "mirez", "miros", "mirat", "miree", 
    "misai", "misas", "miser", "mises", "misez", "misse", "misat", "misee", "mitai", "mitan", "mitas", 
    "miter", "mites", "mitez", "miton", "mitre", "mitat", "mitee", "mixai", "mixas", "mixer", "mixes", 
    "mixez", "mixte", "mixat", "mixee", "moche", "mocos", "modal", "modem", "modes", "modus", "moere", 
    "moine", "moins", "moira", "moire", "moisa", "moise", "moisi", "moita", "moite", "moiti", "mokas", 
    "molle", "molli", "mollo", "molys", "momie", "monda", "monde", "monel", "monos", "monta", "monte", 
    "monts", "moqua", "moque", "moral", "morde", "mords", "mordu", "mores", "morio", "morne", "morse", 
    "morte", "morts", "morue", "morve", "mosan", "motel", "motet", "motif", "motos", "motta", "motte", 
    "motus", "mouds", "moues", "moula", "moule", "moult", "moulu", "mouva", "mouve", "moxas", "moyen", 
    "moyeu", "moyee", "moyes", "mouts", "muais", "muait", "muant", "mucha", "muche", "mucor", "mucus", 
    "muent", "muera", "muets", "mufle", "mufti", "muges", "mugie", "mugir", "mugis", "mugit", "muids", 
    "muiez", "mules", "mulet", "mulon", "mulot", "munie", "munir", "munis", "munit", "muons", "murai", 
    "mural", "muras", "murer", "mures", "muret", "murex", "murez", "murat", "muree", "musai", "musas", 
    "muscs", "muser", "muses", "musez", "mussa", "musse", "musts", "musat", "musee", "mutai", "mutas", 
    "muter", "mutes", "mutez", "mutin", "mutat", "mutee", "muees", "myome", "myope", "myrte", "mythe", 
    "macha", "mache", "males", "manes", "meche", "medes", "meres", "metre", "meats", "mecha", "media", 
    "medis", "medit", "medoc", "mefia", "mefie", "mefis", "mefit", "megie", "megir", "megis", "megit", 
    "megot", "melia", "melos", "memes", "merou", "metal", "metas", "metis", "metra", "metro", "meteo", 
    "melai", "melas", "meler", "meles", "melez", "melat", "melee", "moles", "momes", "mumes", "murie", 
    "murir", "muris", "murit", "nabab", "nabot", "nacra", "nacre", "nadir", "nafes", "nagea", "nager", 
    "nages", "nagez", "nagee", "naine", "nains", "najas", "nanan", "nanar", "nanas", "nanti", "napel", 
    "nappa", "nappe", "napee", "nards", "narra", "narre", "nasal", "nases", "nasse", "natal", "natif", 
    "natta", "natte", "naval", "navet", "navra", "navre", "nazie", "nazis", "naifs", "naive", "nebka", 
    "necks", "negro", "neige", "nenni", "nerfs", "nervi", "nette", "neufs", "neume", "neuve", "neveu", 
    "niais", "niait", "niant", "nicha", "niche", "nicol", "nient", "niera", "nifes", "niiez", "nille", 
    "nimba", "nimbe", "ninas", "nions", "nippa", "nippe", "nique", "nitra", "nitre", "nival", "nixes", 
    "niece", "nieme", "niees", "niole", "noble", "noces", "nocif", "noeud", "noies", "noire", "noirs", 
    "noise", "nolis", "nomes", "nomma", "nomme", "nonce", "nones", "nonne", "nopai", "nopal", "nopas", 
    "noper", "nopes", "nopez", "nopat", "nopee", "nordi", "noria", "norme", "notai", "notas", "noter", 
    "notes", "notez", "notre", "notat", "notee", "nouai", "nouas", "nouba", "nouer", "noues", "nouez", 
    "nouat", "nouee", "novai", "novas", "nover", "noves", "novez", "novat", "novee", "noyai", "noyas", 
    "noyau", "noyer", "noyez", "noyat", "noyee", "noyes", "nuage", "nuais", "nuait", "nuant", "nuent", 
    "nuera", "nuiez", "nuira", "nuire", "nuise", "nuite", "nuits", "nulle", "nuons", "nuque", "nurse", 
    "nuees", "nylon", "nefle", "negre", "neant", "negus", "nenes", "neons", "neves", "oasis", "obels", 
    "obier", "obits", "objet", "oblat", "obole", "obtus", "obvia", "obvie", "obele", "obere", "obese", 
    "obeie", "obeir", "obeis", "obeit", "obera", "occlu", "ocrai", "ocras", "ocrer", "ocres", "ocrez", 
    "ocrat", "ocree", "octet", "ocean", "odeur", "odeon", "oeufs", "oeuve", "offre", "oflag", "ogive", 
    "ogres", "oille", "oings", "ointe", "oints", "oisif", "oison", "okapi", "olive", "oleum", "omble", 
    "ombre", "omets", "omise", "omega", "onces", "oncle", "ondes", "ondin", "ondee", "ongle", "opale", 
    "opens", "opiat", "opina", "opine", "opium", "optai", "optas", "opter", "optes", "optez", "optat", 
    "opere", "opera", "orage", "orale", "orant", "oraux", "orbes", "ordre", "orges", "orgie", "orgue", 
    "oriel", "orins", "orles", "ormes", "ornai", "ornas", "orner", "ornes", "ornez", "ornat", "ornee", 
    "orobe", "orpin", "orque", "ortie", "orvet", "orees", "osais", "osait", "osant", "oscar", "osent", 
    "osera", "oside", "osier", "osiez", "osons", "osque", "ossue", "ossus", "osees", "otage", "otite", 
    "ouais", "ouata", "ouate", "oubli", "ouche", "oueds", "ouest", "ourdi", "ourla", "ourle", "ourse", 
    "ouste", "outil", "outra", "outre", "ouvra", "ouvre", "ouies", "ouira", "ovale", "ovate", "ovine", 
    "ovins", "ovnis", "ovula", "ovule", "oxyda", "oxyde", "oyais", "oyats", "ozone", "ozene", "otais", 
    "otait", "otant", "otent", "otera", "otiez", "otons", "otees", "pacha", "packs", "pacte", "paddy", 
    "padou", "pagea", "pagel", "pager", "pages", "pagez", "pagne", "pagre", "pagus", "pagee", "paies", 
    "pains", "paire", "pairs", "palan", "pales", "palet", "palis", "palma", "palme", "palot", "palpa", 
    "palpe", "palud", "palus", "palee", "pampa", "panai", "panas", "panax", "panca", "panda", "panel", 
    "paner", "panes", "panez", "panic", "panka", "panna", "panne", "pansa", "panse", "pansu", "panat", 
    "panee", "paons", "papal", "papas", "papes", "papis", "papys", "parai", "paras", "parce", "parcs", 
    "pardi", "parer", "pares", "parez", "paria", "parie", "paris", "parka", "parla", "parle", "parme", 
    "parmi", "paroi", "paros", "parsi", "parte", "parti", "parts", "parue", "parus", "parut", "parat", 
    "paree", "pareo", "passa", "passe", "pater", "patin", "patio", "patta", "patte", "pattu", "pauma", 
    "paume", "pausa", "pause", "pavai", "pavas", "paver", "paves", "pavez", "pavie", "pavot", "pavat", 
    "pavee", "payai", "payas", "payer", "payes", "payez", "payse", "payat", "payee", "paien", "peaux", 
    "pedum", "peina", "peine", "peins", "peint", "pelai", "pelas", "peler", "pelez", "pelle", "pelta", 
    "pelte", "pelat", "pelee", "peles", "pende", "pends", "pendu", "penne", "penny", "penon", "pensa", 
    "pense", "pente", "pentu", "perce", "perde", "perds", "perdu", "perla", "perle", "perse", "perte", 
    "perca", "percu", "pesai", "pesas", "peser", "pesez", "peson", "pesos", "pesse", "pesta", "peste", 
    "pesat", "pesee", "peses", "petit", "peton", "peuls", "peurs", "phage", "phare", "phase", "philo", 
    "phlox", "phone", "phono", "photo", "piafs", "piano", "pians", "picas", "picot", "pieds", "pieta", 
    "pieux", "pifai", "pifas", "pifer", "pifes", "pifez", "piffa", "piffe", "pifat", "pifee", "pigea", 
    "piger", "piges", "pigez", "pigne", "pigee", "pilaf", "pilai", "pilas", "piler", "piles", "pilet", 
    "pilez", "pilla", "pille", "pilon", "pilou", "pilum", "pilat", "pilee", "pince", "pinne", "pinot", 
    "pinta", "pinte", "pinca", "pions", "pipai", "pipas", "piper", "pipes", "pipez", "pipis", "pipit", 
    "pipat", "pipee", "piqua", "pique", "pires", "pissa", "pisse", "pista", "piste", "pises", "pites", 
    "pitie", "piton", "pitre", "pives", "pivot", "pizza", "piece", "piege", "piete", "pieze", "place", 
    "plage", "plaid", "plaie", "plais", "plana", "plane", "plans", "plant", "plate", "plats", "placa", 
    "plait", "plein", "pleur", "pleut", "pliai", "plias", "plier", "plies", "pliez", "pliat", "pliee", 
    "ploie", "plomb", "plots", "plouc", "plouf", "plouk", "ploya", "ploye", "pluie", "pluma", "plume", 
    "plebe", "pneus", "pocha", "poche", "pogne", "poids", "poila", "poile", "poils", "poilu", "poing", 
    "poins", "point", "poire", "poise", "poker", "polar", "polie", "polio", "polir", "polis", "polit", 
    "polka", "polos", "pomma", "pomme", "pompa", "pompe", "ponce", "ponde", "ponds", "pondu", "poney", 
    "ponge", "ponta", "ponte", "ponts", "ponca", "pools", "popes", "poqua", "poque", "porcs", "pores", 
    "porno", "porta", "porte", "porto", "ports", "posai", "posas", "poser", "poses", "posez", "posta", 
    "poste", "posat", "posee", "potes", "potin", "potee", "pouah", "pouce", "poufs", "poule", "pouls", 
    "poupe", "poeme", "poete", "poela", "poele", "prame", "prend", "preux", "priai", "prias", "prier", 
    "pries", "priez", "prima", "prime", "primo", "prisa", "prise", "priva", "prive", "priat", "priee", 
    "probe", "profs", "proie", "prolo", "promo", "promu", "prose", "prote", "proue", "provo", "prude", 
    "prune", "prele", "preau", "prevu", "preta", "prete", "prets", "prona", "prone", "psitt", "psoas", 
    "ptose", "puais", "puait", "puant", "pubis", "puces", "puche", "puent", "puera", "puiez", "puisa", 
    "puise", "puits", "pulls", "pulpe", "pulsa", "pulse", "pumas", "punas", "punch", "punie", "punir", 
    "punis", "punit", "punks", "puons", "pupes", "pures", "purge", "purin", "purot", "puree", "pusse", 
    "putes", "putti", "putto", "puees", "puine", "pyrex", "palie", "palir", "palit", "pamai", "pamas", 
    "pamer", "pames", "pamez", "pamat", "pamee", "paque", "patai", "patas", "pates", "patez", "patie", 
    "patir", "patis", "patit", "paton", "patre", "patat", "patee", "peche", "pegre", "peres", "petes", 
    "pezes", "peage", "peans", "pecha", "pekan", "pekin", "penal", "penil", "penis", "peons", "pepia", 
    "pepie", "pepin", "pepon", "pepes", "perie", "peril", "perir", "peris", "perit", "perot", "petai", 
    "petas", "peter", "petez", "petri", "petre", "petun", "petat", "petee", "penes", "poles", "pumes",
    "quais", "quand", "quant", "quark", "quart", "quasi", "quels", "queue", "queux", "quiet", "quine", 
    "quint", "quiné", "quipo", "quipu", "quota", "quêta", "quête", "quêté", "raban", "rabat", "rabbi", 
    "rabot", "racer", "races", "racla", "racle", "racee", "radai", "radar", "radas", "rader", "rades", 
    "radez", "radia", "radie", "radin", "radio", "radis", "radat", "radee", "rafla", "rafle", "ragea", 
    "rager", "rages", "ragez", "ragot", "ragua", "rague", "ragee", "raide", "raidi", "raids", "raies", 
    "rails", "raina", "raine", "raire", "rajah", "rajas", "rakis", "ramai", "ramas", "ramer", "rames", 
    "ramez", "ramie", "ramis", "rampa", "rampe", "ramat", "ramee", "rance", "ranch", "ranci", "range", 
    "rangs", "ranis", "raout", "rapin", "rapts", "raqua", "raque", "rares", "rasai", "rasas", "raser", 
    "rases", "rasez", "rashs", "rasta", "rasat", "rasee", "ratai", "ratas", "ratel", "rater", "rates", 
    "ratez", "ratio", "raton", "ratat", "ratee", "raves", "ravie", "ravin", "ravir", "ravis", "ravit", 
    "rayai", "rayas", "rayer", "rayes", "rayez", "rayon", "rayat", "rayee", "raias", "rebab", "rebat", 
    "rebec", "rebut", "recel", "recez", "recru", "recta", "recto", "recul", "reces", "redan", "redis", 
    "redit", "redue", "redus", "redut", "refis", "refit", "refus", "reine", "reins", "rejet", "relax", 
    "relia", "relie", "relis", "relit", "relue", "relui", "relus", "relut", "remet", "remis", "remit", 
    "remua", "remue", "rende", "rends", "rendu", "renia", "renie", "renne", "renom", "renta", "rente", 
    "renee", "renes", "repas", "repic", "repli", "replu", "repos", "repue", "repus", "reput", "resta", 
    "reste", "revis", "revit", "revue", "revus", "revet", "recue", "recus", "recut", "rhuma", "rhumb", 
    "rhume", "rhums", "riais", "riait", "rials", "riant", "ribla", "rible", "riche", "ricin", "ridai", 
    "ridas", "rider", "rides", "ridez", "ridat", "ridee", "riels", "riens", "rient", "rieur", "rifla", 
    "rifle", "rifts", "riiez", "rimai", "rimas", "rimer", "rimes", "rimez", "rimat", "rimee", "rince", 
    "rings", "rinca", "rions", "ripai", "ripas", "riper", "ripes", "ripez", "ripat", "ripee", "rirai", 
    "riras", "rires", "rirez", "riser", "risse", "risee", "rital", "rites", "rivai", "rival", "rivas", 
    "river", "rives", "rivet", "rivez", "rivat", "rivee", "rixes", "robai", "robas", "rober", "robes", 
    "robez", "robin", "robot", "robat", "robee", "roche", "rocks", "rocou", "rodai", "rodas", "roder", 
    "rodes", "rodez", "rodat", "rodee", "rodeo", "rogna", "rogne", "rogue", "roide", "roidi", "roman", 
    "rompe", "romps", "rompt", "rompu", "ronce", "ronde", "rondi", "rondo", "ronds", "ronge", "roqua", 
    "roque", "rosai", "rosas", "rosat", "roser", "roses", "rosez", "rosie", "rosir", "rosis", "rosit", 
    "rossa", "rosse", "rosee", "rotai", "rotas", "roter", "rotes", "rotez", "rotin", "rotor", "rotat", 
    "rouai", "rouan", "rouas", "rouer", "roues", "rouet", "rouez", "roufs", "rouge", "rougi", "rouie", 
    "rouir", "rouis", "rouit", "roula", "roule", "roumi", "round", "routa", "route", "rouat", "rouee", 
    "royal", "ruade", "ruais", "ruait", "ruant", "ruban", "rubis", "rucha", "ruche", "rudes", "ruent", 
    "ruera", "rugby", "rugie", "rugir", "rugis", "rugit", "ruiez", "ruila", "ruile", "ruina", "ruine", 
    "rumba", "rumen", "rumex", "ruolz", "ruons", "rupin", "rural", "rusai", "rusas", "ruser", "ruses", 
    "rusez", "rushs", "russe", "rusat", "rusee", "ruees", "rabla", "rable", "ralai", "ralas", "raler", 
    "rales", "ralez", "ralat", "rapai", "rapas", "raper", "rapes", "rapez", "rapat", "rapee", "regle", 
    "regne", "reacs", "reagi", "reais", "reait", "reale", "reant", "reaux", "rebus", "recif", "recit", 
    "redie", "reels", "reent", "reera", "regal", "regie", "regir", "regis", "regit", "regla", "reglo", 
    "regna", "reiez", "remiz", "renal", "reons", "repit", "retif", "retro", "reuni", "reees", "reelu", 
    "reche", "revai", "revas", "rever", "reves", "revez", "revat", "revee", "roles", "rotie", "rotir", 
    "rotis", "rotit", "sabir", "sabla", "sable", "sabot", "sabra", "sabre", "sache", "sacra", "sacre", 
    "safre", "sagas", "sages", "sagou", "sagum", "sahel", "saine", "sains", "saint", "saisi", "sajou", 
    "sakis", "sakes", "salai", "salas", "salep", "saler", "sales", "salez", "salie", "salin", "salir", 
    "salis", "salit", "salle", "salol", "salon", "salop", "salsa", "salse", "salua", "salue", "salut", 
    "salve", "salat", "salee", "samba", "samit", "sampi", "sanas", "sangs", "sanie", "sante", "sanve", 
    "sanza", "saoul", "sapai", "sapas", "saper", "sapes", "sapez", "sapin", "sapat", "sapee", "saqua", 
    "saque", "sarde", "saris", "saros", "sassa", "sasse", "satin", "satis", "sauce", "saufs", "sauge", 
    "saule", "sauna", "saune", "saura", "saure", "sauri", "saurs", "sauta", "saute", "sauts", "sauva", 
    "sauve", "sauca", "savez", "savon", "saxes", "saxon", "saxos", "sayon", "saiga", "saite", "sbire", 
    "scalp", "scare", "scats", "sceau", "schah", "sciai", "scias", "scier", "scies", "sciez", "scion", 
    "sciat", "sciee", "scoop", "score", "scout", "scull", "scuta", "scene", "seaux", "sebka", "secte", 
    "seime", "seine", "seing", "seins", "seize", "selfs", "sella", "selle", "selon", "seltz", "selve", 
    "semai", "semas", "semer", "semez", "semis", "semat", "semee", "semes", "senau", "senne", "sense", 
    "sente", "senti", "seoir", "serai", "seras", "serbe", "serez", "serfs", "serge", "serin", "serpe", 
    "serra", "serre", "serte", "serti", "serve", "servi", "seuil", "seule", "seuls", "sevra", "sevre", 
    "sexes", "sexte", "sexto", "sexue", "shahs", "shako", "shoot", "short", "shows", "shunt", "sicle", 
    "siens", "sieur", "sigle", "sigma", "signa", "signe", "silex", "silos", "simas", "singe", "sinon", 
    "sinus", "sioux", "sires", "sirex", "sirli", "sirop", "sisal", "sises", "sitar", "sites", "situa", 
    "situe", "sitot", "siums", "sixte", "siege", "siera", "skate", "skiai", "skias", "skier", "skies", 
    "skiez", "skiff", "skifs", "skiat", "skiee", "slang", "slave", "slips", "sloop", "slows", "smala", 
    "smalt", "smart", "smash", "smogs", "smolt", "smurf", "snack", "sniff", "snoba", "snobe", "snobs", 
    "sobre", "socle", "sodas", "sodee", "sodes", "soeur", "sofas", "soies", "soifs", "soins", "soirs", 
    "sojas", "solda", "solde", "solen", "soles", "solex", "solin", "solos", "somas", "somma", "somme", 
    "sonar", "sonda", "sonde", "songe", "sonna", "sonne", "sonos", "sorbe", "sores", "sorte", "sorti", 
    "sorts", "sosie", "sotch", "sotie", "sotte", "souci", "souda", "soude", "soues", "souks", "soupe", 
    "sourd", "souri", "soute", "soyas", "soyer", "soyez", "soula", "soule", "souls", "spahi", "spart", 
    "spath", "sphex", "spire", "spore", "sport", "spots", "sprat", "spray", "sprue", "speos", "squat", 
    "squaw", "stade", "staff", "stage", "stand", "stars", "stase", "statu", "steak", "stemm", "stems", 
    "stick", "stipe", "stock", "stops", "store", "stout", "stras", "stria", "strie", "strix", "stucs", 
    "styla", "style", "stylo", "stele", "stere", "steno", "stera", "suage", "suais", "suait", "suant", 
    "suave", "suber", "subie", "subir", "subis", "subit", "sucer", "suces", "sucez", "sucra", "sucre", 
    "sucee", "suent", "suera", "sueur", "suffi", "suies", "suiez", "suifa", "suife", "suifs", "suint", 
    "suite", "suive", "suivi", "sujet", "sulky", "sumac", "sunna", "suons", "super", "supin", "supra", 
    "surah", "sures", "suret", "surfa", "surfe", "surfs", "surfi", "surgi", "surie", "surin", "surir", 
    "suris", "surit", "suros", "sushi", "susse", "sutis", "sutra", "sutoi", "sucai", "sucas", "sucon", 
    "sucat", "suede", "suees", "swaps", "swing", "sylve", "sympa", "seche", "seves", "seant", "sebum", 
    "secha", "seide", "senat", "senes", "sepia", "serac", "serie", "serum", "seton", "sevie", "sevir", 
    "sevis", "sevit", "sumes", "sutes", "tabac", "tabar", "tabla", "table", "tabor", "tabou", "tabes", 
    "tacca", "tacet", "tacha", "tache", "tacon", "tacot", "tacts", "tafia", "tagal", "taies", "tains", 
    "taira", "taire", "taise", "talai", "talas", "talcs", "taler", "tales", "talez", "talla", "talle", 
    "talon", "talus", "talat", "talee", "tamia", "tamil", "tamis", "tance", "tango", "tanin", "tanks", 
    "tanna", "tanne", "tante", "tanca", "taons", "tapai", "tapas", "taper", "tapes", "tapez", "tapie", 
    "tapin", "tapir", "tapis", "tapit", "tapon", "tapat", "tapee", "taqua", "taque", "tarai", "taras", 
    "tarda", "tarde", "tarer", "tares", "taret", "tarez", "targe", "tarie", "tarif", "tarin", "tarir", 
    "taris", "tarit", "tarot", "tarse", "tarte", "tarti", "tarat", "taree", "tassa", "tasse", "tatas", 
    "tatou", "taule", "taupe", "taure", "taxai", "taxas", "taxer", "taxes", "taxez", "taxie", "taxis", 
    "taxon", "taxat", "taxee", "taiga", "tchao", "tecks", "teins", "teint", "telle", "tells", "tempe", 
    "tempo", "temps", "tende", "tends", "tendu", "tenez", "tenir", "tenon", "tenta", "tente", "tenue", 
    "tenus", "terce", "terme", "terne", "terni", "terra", "terre", "terri", "tersa", "terse", "terca", 
    "testa", "teste", "tests", "tette", "texan", "texte", "thaie", "thons", "thora", "thune", "thuya", 
    "thyms", "theme", "these", "theta", "tians", "tiare", "tibia", "tiens", "tient", "tiers", "tiffe", 
    "tiges", "tigra", "tigre", "tilde", "tilla", "tille", "tilts", "timon", "tinta", "tinte", "tiqua", 
    "tique", "tirai", "tiras", "tirer", "tires", "tiret", "tirez", "tirat", "tiree", "tisai", "tisas", 
    "tiser", "tises", "tisez", "tison", "tissa", "tisse", "tissu", "tisat", "tisee", "titan", "titis", 
    "titra", "titre", "tiede", "tiedi", "tmese", "toast", "toges", "toila", "toile", "toisa", "toise", 
    "toits", "tokai", "tokay", "tolet", "tolle", "tolus", "tomai", "tomas", "tomba", "tombe", "tomer", 
    "tomes", "tomez", "tomme", "tommy", "tomat", "tomee", "tonal", "tonde", "tonds", "tondu", "tonie", 
    "tonka", "tonna", "tonne", "tonte", "tonus", "topai", "topas", "toper", "topes", "topez", "topos", 
    "topat", "toqua", "toque", "torah", "torde", "tords", "tordu", "torii", "toril", "toron", "torse", 
    "torts", "torve", "torea", "toree", "total", "totem", "toton", "totos", "touai", "touas", "touer", 
    "toues", "touez", "tourd", "tours", "toute", "touts", "touat", "touee", "trabe", "trace", "tracs", 
    "tract", "trahi", "traie", "train", "trais", "trait", "trama", "trame", "trams", "trapu", "traca", 
    "triai", "trial", "trias", "tribu", "tridi", "trier", "tries", "triez", "trima", "trime", "trine", 
    "trins", "triol", "trios", "tripe", "trips", "triat", "triee", "trocs", "trois", "troll", "tronc", 
    "trope", "trots", "troua", "troue", "trous", "trucs", "truie", "trust", "trema", "treve", "trona", 
    "trone", "tsars", "tuage", "tuais", "tuait", "tuant", "tubai", "tubas", "tuber", "tubes", "tubez", 
    "tubat", "tubee", "tuent", "tuera", "tueur", "tuiez", "tuila", "tuile", "tulle", "tuner", "tunes", 
    "tuons", "tuque", "turbe", "turco", "turcs", "turfs", "turne", "tusse", "tutie", "tutti", "tutus", 
    "tuyau", "tuees", "tweed", "twist", "typai", "typas", "typer", "types", "typez", "typha", "typon", 
    "typos", "typat", "typee", "tyran", "tzars", "tatai", "tater", "tates", "tatez", "tatat", "tatee", 
    "tetes", "telex", "teles", "tenia", "tenor", "tetai", "tetas", "teter", "tetez", "tetin", "teton", 
    "tetra", "tetat", "tetee", "tetue", "tetus", "toles", "tolee", "tumes", "tutes", "ubacs", "ukase", 
    "ultra", "ulula", "ulule", "ulves", "ulema", "unaus", "unies", "union", "unira", "unite", "urane", 
    "urate", "urgea", "urger", "urgee", "urges", "urina", "urine", "urnes", "urubu", "urees", "usage", 
    "usais", "usait", "usant", "usent", "usera", "usiez", "usina", "usine", "usite", "usnee", "usons", 
    "usuel", "usure", "usees", "utile", "uvale", "uvaux", "uvula", "uvule", "uvees", "vache", "vagie", 
    "vagin", "vagir", "vagis", "vagit", "vagua", "vague", "vainc", "vaine", "vains", "vairs", "vaire", 
    "valet", "valez", "valsa", "valse", "value", "valus", "valut", "valve", "vampa", "vampe", "vamps", 
    "vanda", "vanna", "vanne", "vanta", "vante", "vapes", "vaqua", "vaque", "varan", "varia", "varie", 
    "varus", "varve", "vases", "vaste", "veaux", "veina", "veine", "velds", "velot", "velte", "velue", 
    "velus", "vende", "vends", "vendu", "venet", "venez", "venge", "venin", "venir", "venta", "vente", 
    "vents", "venue", "venus", "verbe", "verdi", "verge", "verni", "verra", "verre", "versa", "verse", 
    "verso", "verte", "verts", "vertu", "verve", "vesce", "vessa", "vesse", "veste", "veufs", "veule", 
    "veuve", "vexai", "vexas", "vexer", "vexes", "vexez", "vexat", "vexee", "vibra", "vibre", "vices", 
    "vichy", "vicia", "vicie", "vidai", "vidas", "vider", "vides", "videz", "vidat", "videe", "video", 
    "vieil", "viens", "vient", "vieux", "vigie", "vigne", "viles", "villa", "ville", "vinai", "vinas", 
    "viner", "vines", "vinez", "vingt", "vinat", "vinee", "viocs", "viola", "viole", "viols", "virai", 
    "viral", "viras", "virer", "vires", "virez", "viril", "virus", "virat", "viree", "visai", "visas", 
    "viser", "vises", "visez", "vison", "vissa", "visse", "visat", "visee", "vitae", "vital", "vitra", 
    "vitre", "vivat", "vives", "vivez", "vivra", "vivre", "vizir", "vocal", "vodka", "voeux", "vogua", 
    "vogue", "voici", "voies", "voila", "voile", "voire", "volai", "volas", "voler", "voles", "volet", 
    "volez", "volis", "volta", "volte", "volts", "volve", "volat", "volee", "vomer", "vomie", "vomir", 
    "vomis", "vomit", "votai", "votas", "voter", "votes", "votez", "votif", "votre", "votat", "votee", 
    "vouai", "vouas", "vouer", "voues", "vouez", "vouge", "voulu", "vouat", "vouee", "voyer", "voyez", 
    "voyou", "vouta", "voute", "vraie", "vrais", "vulgo", "vulve", "vecue", "vecus", "vecut", "veces", 
    "velar", "velie", "velin", "velos", "velum", "venal", "verin", "velai", "velas", "veler", "veles", 
    "velez", "velat", "vetes", "vetez", "vetir", "vetis", "vetit", "vetue", "vetus", "vimes", "vites", 
    "wagon", "watts", "weber", "wharf", "whigs", "whist", "winch", "xipho", "xyste", "xenon", "xerus", 
    "xeres", "yacht", "yacks", "yards", "yeuse", "yogas", "yogis", "yoles", "yucca", "zabre", "zains", 
    "zanis", "zanni", "zanzi", "zazou", "zends", "zesta", "zeste", "zibai", "zibas", "ziber", "zibes", 
    "zibez", "zibat", "zibee", "zigua", "zigue", "zincs", "zippa", "zippe", "zizis", "zloty", "zombi", 
    "zonai", "zonal", "zonas", "zoner", "zones", "zonez", "zonat", "zonee", "zooms", "zozos", "zoile", 
    "zebre", "zeles", "zebra", "zebus", "zelee", "zeros"
]

// Définition de la longueur du mot
const WORD_LENGTH = 5;

// Durée de l'animation pour le retournement des lettres (en millisecondes)
const FLIP_ANIMATION_DURATION = 300;

// Sélectionne le clavier dans le document HTML
const keyboard = document.querySelector("[data-keyboard]");

// Conteneur des alertes dans le document HTML
const alertContainer = document.querySelector("[data-alert-container]");

// Sélectionne la grille de devinettes dans le document HTML
const guessGrid = document.querySelector("[data-guess-grid]");

// Décalage à partir d'une date de référence pour sélectionner les mots cibles
const offsetFromDate = new Date(2022, 20, 0);

// Calcule le décalage en millisecondes depuis la date de référence
const msOffset = Date.now() - offsetFromDate;

// Convertit le décalage en jours
const dayOffset = msOffset / 1000 / 60 / 60 / 24;

// Sélectionne 5 mots cibles aléatoirement en fonction du décalage en jours
const selectedWords = [];
const numWords = 5;
for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * targetWords.length);
    selectedWords.push(targetWords[randomIndex]);
}

targetWord = selectedWords[0];

// Nombre d'essais maximum
const MAX_TRIES = 6;

// Variable pour stocker le nombre de mots devinés
let guessedWords = 0;

// Variable pour stocker le score du joueur
let score = 0;

let active_row = 0;

let attempt = 0;

const scoreElement = document.getElementById('score');
const guessedWordsElement = document.getElementById('guessed-words');

startInteraction()

console.log(selectedWords);

function startInteraction() {
    // Ajoute un écouteur d'événement pour les clics de souris
    document.addEventListener("click", handleMouseClick);
    // Ajoute un écouteur d'événement pour les pressions de touches
    document.addEventListener("keydown", handleKeyPress);
};

function stopInteraction() {
    // Supprime l'écouteur d'événement pour les clics de souris
    document.removeEventListener("click", handleMouseClick);
    // Supprime l'écouteur d'événement pour les pressions de touches
    document.removeEventListener("keydown", handleKeyPress);
};

function handleMouseClick(e) {
    // Vérifie si la cible du clic est un élément avec l'attribut data-key
    if (e.target.matches("[data-key]")) {
    // Appelle la fonction pressKey avec la valeur de l'attribut data-key de la cible
    pressKey(e.target.dataset.key);
    return; // Arrête l'exécution de la fonction
    }

    // Vérifie si la cible du clic est un élément avec l'attribut data-enter
    if (e.target.matches("[data-enter]")) {
    // Appelle la fonction submitGuess
    submitGuess();
    return; // Arrête l'exécution de la fonction
    }

    // Vérifie si la cible du clic est un élément avec l'attribut data-delete
    if (e.target.matches("[data-delete]")) {
    // Appelle la fonction deleteKey
    deleteKey();
    return; // Arrête l'exécution de la fonction
    }
}

function handleKeyPress(e) {
    // Vérifie si la touche pressée est la touche "Entrée"
    if (e.key === "Enter") {
    // Appelle la fonction submitGuess
    submitGuess();
    return; // Arrête l'exécution de la fonction
    }

    // Vérifie si la touche pressée est la touche "Retour arrière" ou "Supprimer"
    if (e.key === "Backspace" || e.key === "Delete") {
    // Appelle la fonction deleteKey
    deleteKey();
    return; // Arrête l'exécution de la fonction
    }

    // Vérifie si la touche pressée est une lettre minuscule
    if (e.key.match(/^[a-z]$/)) {
    // Appelle la fonction pressKey avec la lettre pressée comme argument
    pressKey(e.key);
    return; // Arrête l'exécution de la fonction
    }
}

//fonction pour l'ajout et la suppression des lettres

const pressKey = (key) => {
    // Récupère les tuiles actives dans la grille de devinettes
    const activeTiles = getActiveTiles();
    // Vérifie si le nombre de tuiles actives atteint ou dépasse la longueur du mot
    if (activeTiles.length >= WORD_LENGTH) return; // Si oui, arrête l'exécution de la fonction
    // Sélectionne la prochaine tuile vide dans la grille de devinettes
    const nextTile = guessGrid.querySelector(":not([data-letter])");
    // Assigne la lettre de la touche pressée à la tuile
    nextTile.dataset.letter = key.toLowerCase();
    // Affiche la lettre sur la tuile
    nextTile.textContent = key;
    // Définit l'état de la tuile sur "active"
    nextTile.dataset.state = "active";
}

const deleteKey = () => {
    // Récupère les tuiles actives dans la grille de devinettes
    const activeTiles = getActiveTiles();
    // Récupère la dernière tuile active
    const lastTile = activeTiles[activeTiles.length - 1];
    // Si aucune tuile active n'est trouvée, arrête l'exécution de la fonction
    if (lastTile == null) return;
    // Efface le contenu de la dernière tuile active
    lastTile.textContent = "";
    // Supprime les attributs "state" et "letter" de la dernière tuile active
    delete lastTile.dataset.state;
    delete lastTile.dataset.letter;
}

// quand on appuie sur la touche entrée

function submitGuess() {
    // Récupère les tuiles actives dans la grille de devinettes
    const activeTiles = [...getActiveTiles()];
    
    // Vérifie si le nombre de tuiles actives correspond à la longueur du mot attendue
    if (activeTiles.length !== WORD_LENGTH) { 
        // Affiche une alerte si le nombre de lettres n'est pas suffisant
        showAlert("Pas assez de lettres");
        // Fait trembler les tuiles actives pour indiquer l'erreur
        shakeTiles(activeTiles);
        return; // Arrête l'exécution de la fonction
    }

    // Concatène les lettres des tuiles actives pour former une tentative de mot
    const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter;
    }, "");

    // Vérifie si la tentative de mot est présente dans le dictionnaire
    if (!dictionary.includes(guess)) { 
        // Affiche une alerte si le mot n'est pas présent dans la liste de mots attendus
        showAlert("Pas dans le dictionnaire");
        // Fait trembler les tuiles actives pour indiquer l'erreur
        shakeTiles(activeTiles);
        return; // Arrête l'exécution de la fonction
    }

    active_row++;
    // Arrête l'interaction avec le jeu
    stopInteraction();
    
    // Effectue l'animation de retournement pour chaque lettre de la tentative de mot
    activeTiles.forEach((...params) => flipTile(...params, guess));
}

function flipTile(tile, index, array, guess) {
    // Récupère la lettre de la tuile
    const letter = tile.dataset.letter;
    // Recherche la touche du clavier correspondant à la lettre
    const key = keyboard.querySelector(`[data-key="${letter}"i]`);

    // Déclenche l'animation de retournement de la tuile avec un délai calculé
    setTimeout(() => {
    tile.classList.add("flip");
    }, (index * FLIP_ANIMATION_DURATION) / 2);

    // Ajoute un écouteur d'événement pour la fin de la transition de la tuile
    tile.addEventListener(
    "transitionend",
    () => {
        // Retire la classe "flip" pour terminer l'animation de retournement
        tile.classList.remove("flip");

        // Vérifie la correspondance de la lettre avec le mot cible
        if (targetWord[index] === letter) {
            // Si la lettre est à la bonne position, marque la tuile comme correcte
            tile.dataset.state = "correct";
            // Ajoute la classe "correct" à la touche correspondante du clavier
            key.classList.add("correct");
        } else if (targetWord.includes(letter)) {
            // Si la lettre est présente mais à la mauvaise position, marque la tuile comme mal placée
            tile.dataset.state = "wrong-location";
            // Ajoute la classe "wrong-location" à la touche correspondante du clavier
            key.classList.add("wrong-location");
        } else {
            // Si la lettre n'est pas dans le mot cible, marque la tuile comme incorrecte
            tile.dataset.state = "wrong";
            // Ajoute la classe "wrong" à la touche correspondante du clavier
            key.classList.add("wrong");
        }

        // Si c'est la dernière tuile du tableau, réactive l'interaction et vérifie si le joueur a gagné ou perdu
        if (index === array.length - 1) {
        tile.addEventListener(
            "transitionend",
            () => {
            startInteraction();
            checkWinLose(guess, array);
            },
            { once: true }
        );
        }
    },
    { once: true }
    );

    startInteraction();
}

function getActiveTiles() {
    // Sélectionne toutes les tuiles ayant l'attribut data-state="active"
    return guessGrid.querySelectorAll('[data-state="active"]');
};


function showAlert(message, duration = 1000) {
    // Crée un élément div pour afficher l'alerte
    const alert = document.createElement("div");
    // Ajoute le message à l'alerte
    alert.textContent = message;
    // Ajoute la classe "alert" à l'alerte
    alert.classList.add("alert");
    // Insère l'alerte au début du conteneur d'alerte
    alertContainer.prepend(alert);
    // Si la durée n'est pas spécifiée, retourne immédiatement
    if (duration == null) return;

    // Programme la disparition de l'alerte après la durée spécifiée
    setTimeout(() => {
    // Ajoute la classe "hide" pour cacher l'alerte en douceur
    alert.classList.add("hide");
    // Supprime l'alerte du DOM après la fin de la transition
    alert.addEventListener("transitionend", () => {alert.remove()});
    }, duration);
}

function shakeTiles(tiles) {
    // Pour chaque tuile dans le tableau
    tiles.forEach(tile => {
    // Ajoute la classe "shake" pour activer l'animation de secousse
    tile.classList.add("shake");
    // Lorsque l'animation de secousse se termine, supprime la classe "shake"
    tile.addEventListener("animationend", () => {tile.classList.remove("shake")}, { once: true });
    });
}

// on regarde si le mot est strictement le même 

function checkWinLose(guess, tiles) {
    // Vérifie si la tentative de mot correspond au mot cible
    if (guess === targetWord) {
        // Affiche un message de victoire pendant 3 secondes
        showAlert("Tu as gagné", 3000);
        guessedWords++;
        attempt++;

        switch (active_row) {
            case 1:
                score += 1000;
                break;
            case 2:
                score += 700;
                break;
            case 3:
                score += 450;
                break;
            case 4:
                score += 200;
                break;
            case 5:
                score += 100;
                break;
            case 6:
                score += 50;
                break;
        }
        updateScoreboard()

        resetTiles();
        return; // Arrête l'exécution de la fonction
    }

    // Si le joueur n'a pas trouvé le mot, vérifie s'il reste des tuiles vides dans la grille
    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
    // Si toutes les tuiles sont remplies et que le joueur n'a pas trouvé le mot
    if (remainingTiles.length === 0) {
    attempt++;
    // Affiche le mot cible en majuscules comme message de défaite
    showAlert(`Le mot était ${targetWord.toUpperCase()}`, 3000);
    // Arrête l'interaction avec le jeu
    resetTiles();
    }
}

function resetTiles() {
    // Vérifie si le nombre de tentatives est supérieur à 4
    if (attempt > 4) {
        // Affiche le score et le nombre de mots devinés pendant 5000 millisecondes
        showAlert(`Score : ${score}`, 5000);
        showAlert(`Mots devinés : ${guessedWords}`, 5000);

        // Arrête l'interaction avec l'utilisateur
        stopInteraction();
    }

    // Sélectionne toutes les tuiles
    const tiles = document.querySelectorAll('.tile');

    // Réinitialise toutes les tuiles
    tiles.forEach(tile => {
        // Efface le contenu de la tuile
        tile.textContent = "";
        // Supprime les attributs "state" et "letter" de la tuile
        delete tile.dataset.state;
        delete tile.dataset.letter;
    });
    
    // Sélectionne tous les éléments avec la classe "key" à l'intérieur de la classe "keyboard"
    const keys = document.querySelectorAll('.keyboard .key');

    // Parcourt chaque élément et retire les classes spécifiées
    keys.forEach(key => {
        key.classList.remove('wrong', 'wrong-location', 'correct');
    });

    // Réinitialise le mot cible avec le mot correspondant au nombre de tentatives actuel
    targetWord = selectedWords[attempt];
    // Réinitialise la rangée active à 0
    active_row = 0;
    // Termine l'exécution de la fonction
    return;
}

// Fonction pour mettre à jour l'affichage du scoreboard
function updateScoreboard() {
    scoreElement.textContent = score;
    guessedWordsElement.textContent = guessedWords;
}

// Fonction pour activer le mode bleu
function ModeBleu() {
    // Vérifie si le mode bleu n'est pas déjà activé
    if (!document.body.classList.contains('mode-bleu')) {
        // Supprimer les autres modes (violet et vert) des tuiles
        document.querySelectorAll('.tile2').forEach(function(element) {
            element.classList.remove('mode-violet', 'mode-vert');
        });

        // Supprimer les autres modes (violet et vert) du bouton home
        var bouton = document.querySelector('.btn.home');
        bouton.classList.remove('mode-violet', 'mode-vert');

        // Supprimer les classes des modes violet et vert du body
        document.body.classList.remove('mode-violet', 'mode-vert');

        // Ajouter la classe du mode bleu au body
        document.body.classList.add('mode-bleu');

        // Ajouter la classe du mode bleu aux tuiles
        document.querySelectorAll('.tile2').forEach(function(element) {
            element.classList.add('mode-bleu');
        });

        document.querySelectorAll('.scoreboard').forEach(function(element) {
            element.classList.add('mode-bleu');
        });

        // Ajouter la classe du mode bleu au bouton home
        bouton.classList.toggle('mode-bleu');

        // Sauvegarder le mode bleu dans sessionStorage
        sessionStorage.setItem('mode', 'bleu');
        var mod = sessionStorage.getItem('mode');
        var url = window.location.href;

        // Si la page actuelle est "parametre.html"
        if (url.includes("parametre.html")) {
            var lien = document.querySelector('.lien');
            // Ajouter le mode en tant que paramètre à l'URL du lien
            lien.href = "../home.html?mode=" + mod;
        }

        // Si la page actuelle est "home.html"
        if (url.includes("home.html")) {
            var lien3 = document.querySelector('.lien3');
            lien3.href = "HTML/parametre.html?mode=" + mod;
            var lien2 = document.querySelector('.lien2');
            lien2.href = "HTML/dailyWord.html?mode=" + mod;
            var lien = document.querySelector('.lien');
            lien.href = "HTML/serie.html?mode=" + mod;
        }

        // Si la page actuelle est "dailyWord.html"
        if (url.includes("dailyWord.html")) {
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }
        
        // Si la page actuelle est "serie.html"
        if (url.includes("serie.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode violet
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }
    }
}

// Fonction pour activer le mode violet
function ModeViolet() {
    // Vérifie si le mode violet n'est pas déjà activé
    if (!document.body.classList.contains('mode-violet')) {
        // Supprimer les autres modes (bleu et violet) des tuiles et ajouter le mode violet
        document.querySelectorAll('.tile2').forEach(function(element) {
            element.classList.remove('mode-bleu', 'mode-vert');
            element.classList.add('mode-violet');
        });
        
        // Supprimer les autres modes (bleu et violet) des boutons home et ajouter le mode violet
        document.querySelectorAll('.btn.home').forEach(function(element) {
            element.classList.remove('mode-bleu', 'mode-vert');
            element.classList.add('mode-violet');
        });

        // Supprimer les autres modes (bleu et violet) du scoreboard et ajouter le mode violet
        document.querySelectorAll('.scoreboard').forEach(function(element) {
            element.classList.remove('mode-bleu', 'mode-vert');
            element.classList.add('mode-violet');
        });

        // Supprimer les classes des modes bleu et vert du body
        document.body.classList.remove('mode-bleu', 'mode-vert');

        // Ajouter la classe du mode violet au body
        document.body.classList.add('mode-violet');

        // Enregistrer le mode violet dans sessionStorage
        sessionStorage.setItem('mode', 'violet');
        var mod = sessionStorage.getItem('mode');
        var url = window.location.href;

        // Si la page actuelle est "parametre.html"
        if (url.includes("parametre.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode violet
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }

        // Si la page actuelle est "home.html"
        if (url.includes("home.html")) {
            // Mettre à jour les liens des boutons de navigation avec le mode violet
            var lien3 = document.querySelector('.lien3');
            lien3.href = "HTML/parametre.html?mode=" + mod;
            var lien2 = document.querySelector('.lien2');
            lien2.href = "HTML/dailyWord.html?mode=" + mod;
            var lien = document.querySelector('.lien');
            lien.href = "HTML/serie.html?mode=" + mod;
        }

        // Si la page actuelle est "dailyWord.html"
        if (url.includes("dailyWord.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode violet
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }

        // Si la page actuelle est "serie.html"
        if (url.includes("serie.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode violet
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }
    }
}

// Fonction pour activer le mode vert
function ModeVert() {
    // Vérifie si le mode vert n'est pas déjà activé
    if (!document.body.classList.contains('mode-vert')) {
        // Supprimer les autres modes (bleu et violet) des tuiles et ajouter le mode vert
        document.querySelectorAll('.tile2').forEach(function(element) {
            element.classList.remove('mode-bleu', 'mode-violet');
            element.classList.add('mode-vert');
        });
        
        // Supprimer les autres modes (bleu et violet) des boutons home et ajouter le mode vert
        document.querySelectorAll('.btn.home').forEach(function(element) {
            element.classList.remove('mode-bleu', 'mode-violet');
            element.classList.add('mode-vert');
        });

        // Supprimer les autres modes (bleu et violet) du scoreboard et ajouter le mode vert
        document.querySelectorAll('.scoreboard').forEach(function(element) {
            element.classList.remove('mode-bleu', 'mode-violet');
            element.classList.add('mode-vert');
        });

        // Supprimer les classes des modes bleu et violet du body
        document.body.classList.remove('mode-violet', 'mode-bleu');

        // Ajouter la classe du mode vert au body
        document.body.classList.add('mode-vert');

        // Enregistrer le mode vert dans sessionStorage
        sessionStorage.setItem('mode', 'vert');
        var mod = sessionStorage.getItem('mode');
        var url = window.location.href;

        // Si la page actuelle est "parametre.html"
        if (url.includes("parametre.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode vert
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }

        // Si la page actuelle est "home.html"
        if (url.includes("home.html")) {
            // Mettre à jour les liens des boutons de navigation avec le mode vert
            var lien3 = document.querySelector('.lien3');
            lien3.href = "HTML/parametre.html?mode=" + mod;
            var lien2 = document.querySelector('.lien2');
            lien2.href = "HTML/dailyWord.html?mode=" + mod;
            var lien = document.querySelector('.lien');
            lien.href = "HTML/serie.html?mode=" + mod;
        }

        // Si la page actuelle est "dailyWord.html"
        if (url.includes("dailyWord.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode vert
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }
        
        // Si la page actuelle est "serie.html"
        if (url.includes("serie.html")) {
            // Mettre à jour le lien vers "home.html" avec le mode violet
            var lien = document.querySelector('.lien');
            lien.href = "../home.html?mode=" + mod;
        }
    }
}

// Récupérer les paramètres d'URL
const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');
console.log(mode);

// Traiter le mode récupéré
if (mode === 'bleu') {
    ModeBleu();
} else if (mode === 'violet') {
    ModeViolet();
} else if (mode === 'vert') {
    ModeVert();
}