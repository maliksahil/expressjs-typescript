DROP TABLE IF EXISTS TODO;

CREATE TABLE IF NOT EXISTS TODO (
    id INT NOT NULL PRIMARY KEY
    , title varchar(200) NOT NULL
    , isDone boolean NOT NULL DEFAULT false
);

INSERT INTO TODO (id, title, isDone) VALUES 
(1, 'Integrate Vue.js', true),
(2, 'Refactor this later', true),
(3, 'Write an API', true),
(4, 'Get data from a database', true);
