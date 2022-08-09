The following questions have equal weightage. Each answer MUST be completed within 150 words:

1. Describe pseudo-elements and discuss what are they used for?

    They're used to style specific parts of an element. They use double colons (::) , unlike pseudo classes, which use single colons (:)

    For example 
        ::first-line can style the first line of an element. 
        ::after is used to insert content after the element 
        ::before inserts conent before the specified element. 



2. What's the difference between inline and inline-block?
    
    Inline elements only takes up as much width as the content thats inside of it. You CANNOT set height or width on it. 

    With inline-block you CAN set height and width. 



3. What are the different ways to visually hide content (and make it available only for screen readers)?
    
    You can do this by using 
        - the "hidden" attribute
        - moving the content -1000px. This will move it off screen but still technically off the page so it will be able to be read by screen readers
        - clip properties 