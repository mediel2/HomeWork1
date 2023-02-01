let value = 123;

value_str = String(value);
value_num = Number(value_str);
value_bool = Boolean(value_num);

console.log(typeof(value_str),
            typeof(value_num),
            typeof(value_bool))