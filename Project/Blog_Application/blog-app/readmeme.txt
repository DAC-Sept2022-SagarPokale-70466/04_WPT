axios - server call

react-toastify - For Message Display
react-toastify - For Message Display

jodit-react -> Rich text ediotor


react-infinite-scroll-component -> infinte scroll

Cotentext API -> a way to pass the data through the component tree without having to pass props down manually at every level

-> It create global state (global variable) : Solves props drilling prb
Steps : 1> Create context
            Provider -> Both are components
            Consumer

2> wrap our components in our provider
<context.Provider value={user}> // provider provides the user value
    childern
</context.Provider>

3> consume the value with the help of Consumer
<context.Consumer>
    {
        (value) =>(
            <div>
                value.name
              </div>
        )
    }
</ context.Consumer>



-------------------------------------------------

userParam -> get the parameter from the url