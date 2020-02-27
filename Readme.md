#### Create the DB&table

```diff
CREATE TABLE public."shoppingCart"
(
    id serial NOT NULL,
    price money NOT NULL,
    product character varying(30) NOT NULL,
    quantity integer NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public."shoppingCart"
    OWNER to postgres;
```

```diff
SELECT * FROM "shoppingCart";
INSERT INTO "shoppingCart" (id, price, product, quantity) VALUES (1,10,'p1',10);
INSERT INTO "shoppingCart" (id, price, product, quantity) VALUES (2,20,'p2',20);
INSERT INTO "shoppingCart" (id, price, product, quantity) VALUES (3,30,'p3',30);
INSERT INTO "shoppingCart" (id, price, product, quantity) VALUES (4,40,'p4',40);
```

- Checkout : https://github.com/AishaBlake/pg-ex/blob/master/routes.js