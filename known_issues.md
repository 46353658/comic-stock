- Not closing pipe (rest requests) (as per suppliers.component.ts) 
    - question: should I be using a different subscription
- any
- First delete does not immediately update
- service worker
- on push change detection
- use scss
- search on the backend 
-   // create an array and then destroy all elements
  supplierServiceSubscription: Subscription;
- use http.getArgumentList (HttpParams) for limit=500 (or whatever)

done:

- Bring back "Add supplier" after Go back (editing supplier)
- Bring back "Add supplier" after saving
- use the router to go back (supplier-detail.component.ts)
- rename SUPPLIERS to MOCK-SUPPLIERS
- supplier detail can be within supplier
- goBack goes back to issues instead of suppliers
- use environment variables for urls

in progress:

- Looks shit

--------------------------other--------------------------

* create supplier module 
    containing supplier components

    use provider initially

    * use the router to route from "/suppliers"
      to "suppliers/{id}/edit" which will then fetch the individual element to edit

* use the id retrieved from url and do a get within supplier-detail.component.ts