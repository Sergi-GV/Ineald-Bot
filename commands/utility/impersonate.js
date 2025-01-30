const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suplantar')
        .setDescription('Envía un mensaje haciendose pasar por otro usuario.')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario que va a enviar el mensaje.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('mensaje')
                .setDescription('Mensaje que se va a enviar.')
                .setRequired(true)
        ),
    
        async execute(interaction) {
            const message = interaction.options.getString('mensaje');
            const user = interaction.options.getUser('usuario');

            const channel = interaction.channel;
            const webhook = await channel.createWebhook({
                name: user.globalName || user.username,
            });

            await webhook.send({
                content: message,
                username: user.nickname || user.globalName || user.username,
                avatarURL: user.displayAvatarURL(true, 512), 
            });

            await webhook.delete();

            interaction.reply({ content: 'Comando ejecutado con éxito.', ephemeral: true });
        },
};