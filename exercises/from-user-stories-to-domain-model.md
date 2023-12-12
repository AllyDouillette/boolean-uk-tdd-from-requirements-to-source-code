# From User Stories to a Domain Model

### Learning Objectives
- Give the structure of a User Story
- Extract a Domain Model from User Stories

### Intro

A **User Story** describes one thing a program is expected to do, from the perspective of somebody using that program. When planning a program, the client's requirements will be decomposed into many User Stories. Much of a developer's life is spent translating User Stories into a functional system. These systems are made up of different components, and each component is made up of units. We call these systems **Domain Models**.

Here is a type of user story:

```
As a user,
So I can find a specific cohort,
I want to search a list of all cohorts by a cohort name.
```

And here is one possible functional representation of that story.

_'@' denotes a type. For example, `name(@String)` means the variable `name` will be a string data type; and `vegetables(@String[])` means the variable `vegetables` is an array of strings data type._

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | ----- 
| searchByCohortName(cohortList, cohortName) | cohortList(@String[]), cohortName(@String) | If cohort name is in array | true
| | | If cohort name is not in array | false

> **Question**: evaluate this representation - what assumptions are being made and what information do you need to do things differently?

> **Further**: create another representation using the same table format (i.e. What other values could you put into the columns that could satisfy this user story?).


## Instructions
Translate these two user stories into a functional representation:

```
As a supermarket shopper,
So that I can pay for items at checkout,
I'd like to be able to know the total cost of items in my basket.

As an organised individual,
So that I can evaluate my shopping habits,
I'd like to see a receipt that includes line items (quantity, name, cost) and the total cost.
```

Add the following to the file `domain-model.md`:
- [ ] Write down all the **nouns** and then all the **verbs** in the User Stories

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | ----- 
| displayItemsInCart(cart[@Objects]) | cart[@Objects] | >0 of items | sum of all @Object.price * @Object.quantity
| | | 0 | 0

- [x] Draw a table like the first one above and add information regarding **Methods**, **Inputs**, **Scenarios**, and **Outputs** within the table
- [x] Add a column **Data** that describes more about the data for an item in the basket (hint: look for the key **nouns** within the user stories)
- [ ] Show it to someone in your cohort or coach and see if it makes sense to them.

### Further work
 - [ ] There are different ways to model domains. Find another way to do it: investigate [more techniques](https://developer.ibm.com/articles/an-introduction-to-uml/).
 - [ ] Analyse - How would this change if we used classes instead?

### Resources
- [Introduction to User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)
