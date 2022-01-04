const initialState = [
  {
    id: 0,
    name: "Kalle Anka",
    number: 1234567890,
    email: "kalle@ankeborg.com",
  },
  {
    id: 1,
    name: "Musse Pigg",
    number: 7895321252,
    email: "musse@ankeborg.com",
  },
  {
    id: 2,
    name: "Janne Långben",
    number: 23541254,
    email: "janne@ankeborg.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filterContacts = state.filter((contact) =>
        contact.id !== action.payload ? contact : null
      );
      state = filterContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
