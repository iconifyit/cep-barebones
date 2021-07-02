const React = require('react')
    , { ToastContainer, toast } = require('react-toastify')

require('react-toastify/dist/ReactToastify.css');

const LoginButton = require('./auth0/LoginButton');
const LogoutButton = require('./auth0/LogoutButton');

const InputForm = ({addListItem}) => {
    let input;
    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          addListItem(input.value);
          input.value = '';
        }}>
        <p>
            <input 
                style={{"width" : "100%", "color": "black"}}
                className="form-control col-md-12" 
                ref={(node) => { input = node }} 
                key={'input-field'}
            />
        </p>
      </form>
    );
};

const ListItem = ({item, remove}) => {
    return (
        <a href="#" 
            key={item.name}
            className="list-group-item" 
            onClick={ () => { remove(item.name) } }
        >{item.name}</a>
    );
}
  
const ItemsList = ({items, remove}) => {
    const listItems = items.map((item) => {
        return (
            <ListItem 
                item={item} 
                key={item.name} 
                remove={remove}
            />
        )
    });
    return (
        <div 
            key={'list-group-' + Math.random()}
            className="list-group" 
            style={{marginTop:'30px'}}>
            <ul>
            {items.map((item) => {
                return (
                    <li key={`li-${item.name}`}>
                        <ListItem 
                            item={item} 
                            key={item.name} 
                            remove={remove}
                        />
                    </li>
                )
            })}
            </ul>
        </div>
    );
}
  
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : []
        }
        this.createDatabase = this.createDatabase.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    async componentDidMount() {
        this.db = await this.createDatabase();
        this.db.pets.find().$.subscribe((items) => {
            if (! items) return;
            this.setState({items: items});
            console.log('[componentDidMount][this.state]', this.state)
        });
    }

    async createDatabase() {
        const theSchema = require('schema/schema.json');
        const theData   = require('data/pets.json');
        const RxDB      = require('rxdb');
        const dbName    = 'pets';
        const syncURL   = `http://localhost:5984/${dbName}/`;

        RxDB.addRxPlugin(require('pouchdb-adapter-http'));
        RxDB.addRxPlugin(require('pouchdb-adapter-idb'));

        const db = await RxDB.createRxDatabase({
            name: dbName,
            adapter: 'idb'
        });

        const pets = await db.addCollections({
            pets: {
                schema: theSchema
            }
        });

        db.pets.sync({ remote: syncURL });

        theData.forEach((item) => {
            db.pets.upsert(item);
        })

        db.pets.dump()
            .then(json => console.dir(json));
        
        return db;
    }

    async addListItem(val) {
        const item = await this.db.pets.upsert({
            "name": val,
            "age": 2,
            "breed": "Unknown",
            "skills": []
        });
        this.state.items.push(item)
    }

    handleRemove(name) {
        const remainder = this.state.items.filter((item) => {
            if (item.name !== name) return item;
        });

        this.setState({
            items : remainder
        })

        this.db.pets.find().where('name').eq(name).remove();
    }
    

    render() {
        return (
            <div>
                {/* <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                {this.props.children} */}
                {/* <div>
                    <ul>
                        {this.state.items.map((item) => {
                            return (
                                <li key={item.name}>
                                    {item.name} ({item.breed})
                                </li>
                            )
                        })}
                    </ul>
                </div> */}

                { this.state.isAuthenticated ? <LogoutButton/> : <LoginButton/> }

                <div>
                    <InputForm addListItem={this.addListItem} />
                </div>
                <ItemsList 
                    key={'items-list'} 
                    items={this.state.items} 
                    remove={this.handleRemove} 
                />
            </div>
        );
    }
}

module.exports = App;
