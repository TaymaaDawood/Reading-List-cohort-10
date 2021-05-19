/*
Reading list

keep track of what book i have read and ones have not

1. create a list of books
  array of objects
  each object = a book
  each book has a TITLE and AUTHOR , if  i have read it or not BOOLEAN / true - false
  TITLE = string , AUTHOR = string has read = boolean

  Books=[
      {
          TITLE= string
          AUTHOR = string
          HASREAD = boolean
      }
  ]

code
=======
  const books =[
      {
          title:'',
          author:'',
          hasread: true
      },
      {
           title:'',
          author:'',
          hasread: false
      }
  ]

2. cycle through the list of books
   FOR each book show the TITLE and AUTHOR 'The Hobbit by J.R.R Tolkien'
   FOR
     counter
     condition
     increase counter value
     
     FOR
      counter =0
      counter< BOOKS.length
      counter++
for(counter=0;counter<books.length;counter++){

}


3. show whether or not i have read the book     
   IF has read = true
    THEN i have read the book
    ELSE i haven't read the book


    IF has read = true
        'THEN i have read the TITLE by AUTHOR'
    ELSE
        'i haven't read the TITLE by AUTHOR'

        if(hasread){
            console.log(i have read)
        }
*/

const books = [
    {
        title:'The Lord of the Rings',
        author:'J.R.R Tolkien',
        hasread: true
    },
    {
         title:'The Hobbit y',
        author:' J.R.R Tolkien',
        hasread: false
    }
]

for(counter=0;counter<books.length;counter++){
    //console.log(books[counter].title, books[counter].author);
 if(books[counter].hasRead){
     console.log('I have read the book',books[counter].title,'by' ,books[counter].author);
 }
 else{
    console.log('I havenot read the book',books[counter].title,'by' ,books[counter].author);
 }


}
