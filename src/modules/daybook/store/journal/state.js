export default () => ({
    isLoading: true,
    entries: [
        { id: new Date().getTime(), date: new Date().toDateString(), text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', picture: null, },
        { id: new Date().getTime() + 1000, date: new Date().toDateString(), text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', picture: null, },
        { id: new Date().getTime() + 2000, date: new Date().toDateString(), text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.', picture: null, }
    ]
})