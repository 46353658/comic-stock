- Not closing pipe (rest requests)
- any
- Navigation after action 
- First delete does not immediately update
- goBack goes back to issues instead of suppliers -> done
- Looks shit -> in progress
- service worker
- on push change detection
- supplier detail can be within supplier -> done
- use scss
- search on the backend 
- rename SUPPLIERS to MOCK-SUPPLIERS
-   // create an array and then destroy all elements
  supplierServiceSubscription: Subscription;
- use the router to go back (supplier-detail.component.ts)
-------------
other:
- Bring back "Add supplier" after Go back (editing supplier) -> done
- Bring back "Add supplier" after saving 
-   onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
    }

    suppliers.component.ts controls whether or not to show 
    supplier detail, how to affect this variable from another .ts file/another solution to bring back "Add supplier"
