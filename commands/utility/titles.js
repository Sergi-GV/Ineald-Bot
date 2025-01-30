const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('titulo')
        .setDescription('Titulos para Spartagram')
        .addStringOption(option =>
            option.setName('titulo')
                .setDescription('Título a mostrar.')
                .addChoices(
                    { name: "fanpig", value: "# \/\/\/\/\/\/\/\/\/\/ \n# FAN PIG \n# \/\/\/\/\/\/\/\/\/\/"},
                    { name: "sp1", value: "# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \n# SPARTALAND 1 \n# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"},
                    { name: "spV", value: "# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \n# SPARTALAND V \n# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"},
                    { name: "sp2", value: "# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \n# SPARTALAND 2 \n# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"},
                    { name: "mildian", value: "# \/\/\/\/\/\/\/\/\/\/\/ \n# MILDIAN \n# \/\/\/\/\/\/\/\/\/\/\/"},
                    { name: "sp3", value: "# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \n# SPARTALAND 3 \n# \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"}
                )
                .setRequired(true)
        ),
    
        async execute(interaction) {
            const title = interaction.options.getString('titulo');

            const channel = interaction.channel;

            channel.send(title);

            interaction.reply({ content: 'Comando ejecutado con éxito.', ephemeral: true });
        },
};