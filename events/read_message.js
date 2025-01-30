const { Events, AttachmentBuilder } = require('discord.js');

const CONVERSATION_TIME = 5 * 60 * 1000; // 5 minutos en milisegundos
let conversation_begin = null;
let silence_timer = null;
let participate = false;

const phrases = [
    "Las únicas rubias que me gustan frías son las cervezas", 
    "El vino blanco es para el marisco y el tinto, para las personas",
    "Todos pa fuera que me apetece tomar un café solo",
    "Traedme una cerveza, pero sin espuma que ya me afeité esta mañana",
    "Quiero un cubata, pero con poca coca cola, que mañana madrugo",
    "Dadme un café y un cuchillo, que lo quiero cortao",
    "Lo malo de las tetas es que vienen pegadas a una mentirosa",
    "Pero bueno olvidona, ¿no saludas? ¿Ni dos besos ni nada?",
    "¿Otro año sin novia? A ver si vas a ser de la otra acera...",
    "Hazme caso que todos los políticos son unos sinvergüenzas, te lo digo yo",
    "Yo no soy racista, pero si Dios nos separó en continentes por algo sería...",
    "Ponme una rubia, pero de las que no mienten",
    "A partir de ahora no compraré nada que se haya fabricado en China",
    "Si es que la juventud de hoy en día estáis agilipollaos",
    "En mis tiempos si que sabíamos divertirnos, no como ahora",
    "Y la novia? bueno o el novio, que en estos días no podemos asumir nada",
    "Yo no reciclo porque luego el camión de la basura lo recoge todo junto",
    "Si tanto te gustan los inmigrantes, llévatelos a tu casa",
    "El problema es que sobran funcionarios",
    "Ya no se hace música como la de antes",
    "¿Por qué no hay un día del orgullo heterosexual?",
    "Tu hazme caso a mi que sé de lo que hablo, que tengo contactos",
    "Bonitas piernas, ¿cuándo abren?",
    "El PP roba, pero es que es normal, yo si pudiera también robaría",
    "Bueno guapa, ¿quedamos y ya... lo que surja?",
    "¿Te toco una song o las tetas?",
    "Pues yo estuve a punto de invertir en Bitcoin allá por el 2001 pero no lo hice... me equivoqué claramente",
    "Ya me jodería ser peruano",
    "I love cock (me encanta cocinar)",
    "Ando más caliente que un cura en una guardería, primer aviso",
    "Eso diría un chupador de penes profesional",
    "Que se vaya quien se tenga que vayar",
    "Tu naciste por cesárea, yo por desgracia, no somos lo mismo",
    "Cuando nací, el diablo dijo: \"verga\" y yo dije \"comes\"",
    "Si quiere acceder a este mensaje, por favor introduzca sus datos bancarios",
    "Tetas, tetitas, tetazas, tetorras, tetotas, tetarracas, tetacas, tetuzas, teturras, tetungas, tetillas, bufas, bufarras, bufarracas, bufoncias, mamelungas, mamelones, melones, domingas, bubalongas, babongas, pechugas, peras, peritas, perolas, mamellas, tetolas, gemelas, maracas, bazucas, petacas",
    "¿Sabían que en terminos de reproducción entre hombres humanos y Pokémon hembras, Vaporeon es el Pokémon mas compatible para los Humanos? No solo porque están en el Grupo Huevo Campo, que está principalmente conformado por Mamíferos. Vaporeon tiene en promedio una medida de 91.44cm. de altura y un peso de 28,98kg., esto significa que son suficientemente grandes para soportar penes humanos, y con sus impresionantes Estadisticas Base de PS y acceso a Armadura Ácida, puedes ser duro con ella. Debido a su biología mayoritariamente compuesta de agua, no hay dudas de que una Vaporeon excitada sería increiblemente húmeda, tan húmeda que podrías facilmente tener sexo con una por horas sin lastimarte o sentir dolor. Ellas también pueden aprender los movimientos \”Atracción\”, \”Ojitos Tiernos\”, \”Seducción\”, \”Encanto\” y \”Latigo\”, además de no tener pelaje para esconder pezones, así que sería increiblemente facil conseguirte una con humor. Con sus habilidades \”Absorbe Agua\” e \”Hidratación\”, pueden recuperarse facilmente de la fatiga con suficiente agua. Ningún otro Pokémon llega a estar cerca de este nivel de compatibilidad. Además, como curiosidad, si te empeñas suficiente, puedes llegar a hacer a tu Vaporeon Blanca. Vaporeon está literalmente hecha para el pene humano. Asombrosas Estadisticas de Defensa+Alta cantidad de PS+Armadura Ácida significa que puede tener pene todo el dia, de todas las formas y tamaños, y aún así venir por más.",
];

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return; // no leerá sus propios mensajes

        const channel = message.channel;
        if(channel.name === 'instagram') {
            await delete_instagram_messages(message);
            return;
        }

        replies(message);
        conversate(message);
	},
};

async function delete_instagram_messages(message) {
    const attachments = message.attachments;
    if(attachments.size < 1) {
        remove(message);
    }
}

async function remove(message) {
    try {
        const reply = await message.reply('Este canal es solo para mandar fotos del servidor.');

        setTimeout(async () => {
            await message.delete();
        }, 200);

        setTimeout(async () => {
            await reply.delete();
        }, 5000);
    } catch(error) {
        console.error("Error al responder o eliminar mensaje.", error);
    }
}

function replies(message) {
    const text = message.content;

    if(text.toLowerCase().endsWith('cinco') || text.endsWith('5') || 
    text.endsWith('cinco?') || text.endsWith('5?')) {
        message.reply('Por el culo te la hinco.\nCareces de pavimento.');
        return;
    }

    if(text.toLowerCase().endsWith('cuatro') || text.endsWith('4') || 
    text.endsWith('cuatro?') || text.endsWith('4?')) {
        message.reply('Pa tu culo mi aparato.\nPresentas carencias de vía pública.');
        return;
    }

    if(text.toLowerCase().endsWith('trece') || text.endsWith('13') || 
    text.endsWith('trece?') || text.endsWith('13?')) {
        message.reply('Entre más me la mamas más me crece.\nRequiere de tocamiento de césped.');
        return;
    }

    if(text.toLowerCase().endsWith('siete') || text.endsWith('7') || 
    text.endsWith('siete?') || text.endsWith('7?')) {
        message.reply('Por el culo se te mete.\nA chuparla payaso.');
    }

    if(text.toLowerCase().endsWith('ocho') || text.endsWith('8') || 
    text.endsWith('ocho?') || text.endsWith('8?')) {
        message.reply('Por el culo te la abrocho.\nEsta usted falto de acera.');
    }

    if(text.toLowerCase().endsWith('nueve') || text.endsWith('9') || 
    text.endsWith('nueve?') || text.endsWith('9?')) {
        message.reply('Por el culo se te mueve.\nTienes deficiencias de asfalto.');
    }

    if(text.toLowerCase().endsWith('dime') || 
    text.endsWith('dime?')) {
        message.reply('Agachate y gime.\nTe falta calle pringao.');
    }

    if(text.toLowerCase() === 'q' || text.toLowerCase() === 'que' ||
    text.toLowerCase() === 'k' || text.toLowerCase() === 'khe'|| 
    text.toLowerCase() === 'ke' || text.toLowerCase() === 'q?' ||
    text.toLowerCase() === 'que?' || text.toLowerCase() === 'k?' ||
    text.toLowerCase() === 'khe?' || text.toLowerCase() === 'ke?') {
        message.reply('so');
    }
}

function conversate(message) {
    // Ignorar mensajes de bots para evitar respuestas de nosotros mismos
    if (message.author.bot) return;

    const channel = message.channel;

    // Si no se ha iniciado una conversación, marcamos el inicio con el primer mensaje
    if (!conversation_begin) {
        conversation_begin = Date.now();
    }

    // Reiniciar el temporizador de inactividad cada vez que alguien envíe un mensaje
    clearTimeout(silence_timer);
    silence_timer = setTimeout(() => {
        // Reiniciar la conversación si no hay actividad durante el tiempo de inactividad
        conversation_begin = null;
        participate = false;
    }, CONVERSATION_TIME);

    // Si han pasado más de 5 minutos de conversación activa, el bot responde
    const active_time = Date.now() - conversation_begin;
    if (active_time >= CONVERSATION_TIME && !participate) {
        channel.send(phrases[Math.floor(Math.random() * phrases.length)]);
        conversation_begin = null;
        participate = true; 
    }
    participate = false;
}