const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('decir')
        .setDescription('Haz que Ineald diga lo que tu quieras')
        .addStringOption(option =>
            option.setName('mensaje')
                .setDescription('Mensaje que se va a enviar.')
                .setRequired(true)
        ),
    
        async execute(interaction) {
            const message = interaction.options.getString('mensaje');

            const channel = interaction.channel;

            channel.send(message);

            interaction.reply({ content: 'Comando ejecutado con éxito.', ephemeral: true });
        },
};