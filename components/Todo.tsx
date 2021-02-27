import {gql, useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { useItemQuery, RemoveItemMutationVariables, RemoveItemMutation } from '.././src/graphql/types';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    id: string;
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '15px 0'
    },

    title: {
      fontSize: 14,
    },

  });

gql`
    query Item($id: ID!) {
        Tobuy(id: $id) {
            id,
            title,
            price
        }
    }
`;

const REMOVE_ITEM = gql`
    mutation removeItem($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`;

const EDIT_ITEM = gql`
    mutation editItem($id: ID!, $data: UpdateItemData!) {
        updateItem(id: $id, data: $data) {
            title,
            price
        }
    }
`;

const Item = (props: Props) => {
    const classes = useStyles();
    const { id } = props;
    const [removeitem] = useMutation< RemoveItemMutation, RemoveItemMutationVariables>(REMOVE_ITEM);
    const { loading, data } = useItemQuery({
        variables: {
            id
        },
    })
    let content = <div>
        Loading...
    </div>
    
    const deleteItemhandler = (e: React.MouseEvent) => {
        console.log('hello from delete');
        e.preventDefault();
        e.stopPropagation();
        removeitem({
            variables: {
                id: id
            }
        })
        window.location.reload();
    }

    
    
    if(!loading && data) {
        const { price, title, id } = data.Tobuy;
        content = (
            <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Product's Name
              </Typography>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
    
              <Typography variant="body2" component="p">
                {price} ฿ Thai Bahts.
              </Typography>
            </CardContent>
            <CardActions>
            <Button
              variant="contained"
              color="secondary"
              
              startIcon={<DeleteIcon />}
              onClick = {(e) => deleteItemhandler(e)}
            >
        Delete
      </Button>
            </CardActions>
          </Card>
        )
    }
    return (
        <>
            <main>
                {content}
            </main>
        </>
    )
}

export default Item;

