const Command = {
    Agent:{
        Command:1,
        SubCommand:{
            HandshakeCommand:1
        }
    },

    SFU:{
        Command:2,
        SubCommand:{
            NegotiateCommand:1,
            JoinCommand:2
        }
    }
}

export { Command };