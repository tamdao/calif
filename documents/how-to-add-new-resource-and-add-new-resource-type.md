# How to add new resource into `/resources` page

- Create new `md` file at `articles` folder. Ex: `new-resource.md`
- Open to `config/resources.ts`
- Import the new `md` file. Ex: `import newResource from 'articles/new-resource.md'` at the top
- Update the `RESOURCE_LIST` to add new resource item. Below is type of resource item:

```
{
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  type: 'press' | 'blog' | 'case-studies';
  source: string; // the import variable. Ex: newResource
}
```

# How to add new resource type

- Open to `config/resources.ts`
- Update `RESOURCE_TYPE` to add new resource type. Below is type of resource type:

```
{
  id: string;
  label: string;
}
```
