const content = {
    rootId: "5c91cba358267312089b8696",
    items: {
      "5c91cba358267312089b8696": {
        id: "5c91cba358267312089b8696",
        hasChildren: true,
        data: {
          name: "All Menu",
          id: "5c91cba358267312089b8696"
        },
        children: [
          "5c91cba658267312089b8699",
          "5c91cba858267312089b869e",
          "5c91cba958267312089b86a3"
        ]
      },
      "5c91cba658267312089b8699": {
        id: "5c91cba658267312089b8699",
        hasChildren: false,
        data: {
          name: "Networking",
          id: "5c91cba658267312089b8699"
        },
        children: []
      },
      "5c91cba858267312089b869e": {
        id: "5c91cba858267312089b869e",
        hasChildren: false,
        data: {
          name: "SQA",
          id: "5c91cba858267312089b869e"
        },
        children: []
      },
      "5c91cba958267312089b86a3": {
        id: "5c91cba958267312089b86a3",
        hasChildren: true,
        data: {
          name: "Development",
          id: "5c91cba958267312089b86a3"
        },
        children: [ "5c91cbd958267312089b8721",]
      },
      "5c91cbd958267312089b8721": {
        id: "5c91cbd958267312089b8721",
        hasChildren: true,
        data: {
          name: "Web Development",
          id: "5c91cbd958267312089b8721"
        },
        children: [
          "5c91cbe458267312089b8730",
          "5c91cbe558267312089b8735",
        ]
      },
      "5c91cbda58267312089b8726": {
        id: "5c91cbda58267312089b8726",
        hasChildren: false,
        data: {
          name: "CSS",
          id: "5c91cbda58267312089b8726"
        },
        children: []
      },
      "5c91cbdd58267312089b872b": {
        id: "5c91cbdd58267312089b872b",
        hasChildren: false,
        data: {
          name: "Javascript",
          id: "5c91cbdd58267312089b872b"
        },
        children: []
      },
      "5c91cbe458267312089b8730": {
        id: "5c91cbe458267312089b8730",
        hasChildren: true,
        data: {
          name: "Front End",
          id: "5c91cbe458267312089b8730"
        },
        children: [
          "5c91cbe858267312089b873a", 
          "5c91cbda58267312089b8726", 
          "5c91cbdd58267312089b872b"
        ]
      },
      "5c91cbe558267312089b8735": {
        id: "5c91cbe558267312089b8735",
        hasChildren: false,
        data: {
          name: "Back End",
          id: "5c91cbe558267312089b8735"
        },
        children: []
      },
      "5c91cbe858267312089b873a": {
        id: "5c91cbe858267312089b873a",
        hasChildren: false,
        data: {
          name: "HTML",
          id: "5c91cbe858267312089b873a"
        },
        children: []
      }
    }
}







const { rootId, items } = content;

  const itemsArray = Object.values(items);
  

  const getChildren = (item) => {
    return item.children.map((val)=> {
      const childItem = itemsArray.find(v => v.id ===val)
      
      if(!childItem) return null;

      let newItem = {
        id: childItem.id,
        label: childItem.data.name,
        items: getChildren(childItem)
      }
      return newItem;
    })
  };

  const rootItem = itemsArray.find((v) => v.id === rootId);
  const rootItemArr = [rootItem];
  const formattedItems = rootItemArr.map((val, ind) => {
    return {
      id: val.id,
      label: val.data.name,
      items: getChildren(val),
    };
  });


  export {content, formattedItems , itemsArray, rootId};