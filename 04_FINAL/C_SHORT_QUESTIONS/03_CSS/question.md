Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

    Spans are inline elements. You cannot set top or bottom margins on inline elements. 

1. Why can I not set the margin-top on the img with the id "pic" in the head section?

    Because you are already setting margin with inline styling. Inline styling has the highest specificity, so it will override whatever styling in in the head section.