import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";


    export const addContact = createAction('contacts/add', (name, number) =>({
            payload: {
                id: nanoid(),
                name: name,
                number: number
            }
    }));


    export const deleteContact = createAction('contacts/delete');

    export const changeFilter = createAction('contacts/changeFilter');

