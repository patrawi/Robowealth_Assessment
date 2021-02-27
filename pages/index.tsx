import { useState, ChangeEvent, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import Item from '../components/Todo';
import { CreateItemMutation, CreateItemMutationVariables, useIndexQuery, IndexQuery} from '.././src/graphql/types';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';


 const INDEX_QUERY = gql`
    query Index {
        allItem {
            id
        }
    }
`;

const ADD_ITEM = gql`
    mutation createItem($title: String!, $price: Int!) {
        createItem(title: $title, price: $price) {
            price,
            title,
        }
    }
`;



const Index = () => {
    
    const { data, loading } = useIndexQuery();
    const [price, setPrice] = useState(0);
    const [title, setTitle] = useState('');
    const [addItem] = useMutation<CreateItemMutation, CreateItemMutationVariables>(ADD_ITEM);
    const [ id, setID ] = useState<string[]>();
    const fillID = (data: string[]) => {
        setID(data?.slice().sort((a,b) => a.localeCompare(b)))
    }

    const itemElements = id?.map((id) => <Item id = {id} key = {id}  />);

    const body = loading || typeof itemElements === 'undefined' ? null: itemElements.length > 0 ? (
        <>
            <main>
                {itemElements}
            </main>
        </>
    ) : (
        <div>No Todos!</div>
    )



    useEffect(() => {
        fillID(data?.allItem?.map((t) => t.id));
    }, [data?.allItem])
    return (
        
       
             <Container maxWidth="sm">
                   <div>
                        <h3  className = 'title'>Demo</h3>
                        <div className = 'underline'></div>
                   </div>   
                   <form onSubmit = {(e) =>  {
                e.preventDefault();
                addItem({
                    variables: {
                        title: title,
                        price: price,
                    }, /*update(cache, { data }) {
                        const getExisting = cache.readQuery<IndexQuery>({query: INDEX_QUERY});
                        const existingTodos = getExisting ? getExisting.allItem: [];
                        const newTodoTitle = data.createItem!s;
                        const newTodoPrice = data.createItem!.price;
                        cache.writeQuery<IndexQuery>({
                            query: INDEX_QUERY,
                            data: {allItem: [ newTodoTitle, ...existingTodos]}
                        })*/

                    
                })
                
                setPrice(0);
                setTitle('');
                window.location.reload();
            }}> 
                <div className = 'input-field'>
                <TextField type = 'text' id="outlined-basic" label="Tomato" value = {title} onChange = {(e) => setTitle(e.target.value)} variant="outlined" />
                 <TextField  type = 'number' id="outlined-basic"  label="Price" value = {price} onChange = {(e) => setPrice(parseInt(e.target.value))} variant="outlined" />
                </div>
                
                <Button  className = 'addButton'  variant = 'contained' color = 'primary' type = 'submit'>
                    Add
                </Button>
            </form>
            {body}
             </Container>
          
     
    )

}

export default Index;