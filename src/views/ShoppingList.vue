<template>
  <div>
    <h1>Meine Einkaufsliste</h1>
    <div>
      <input type="text" v-model="newItem.name" placeholder="Product" />
      <input type="number" v-model="newItem.quantity" placeholder="Menge" />
      <button @click="saveNewItem">submit</button>
    </div>
    <ul>
      <li v-for="item in items" v-bind:key="item.name" v-bind:class="{ 'bought-item': item.state === 'bought' }">
        {{item.quantity}} x {{ item.name }}
        <button @click="buyItem(item)">Kaufen</button>
        <button v-if="editMode" @click="deleteItem(item)">Löschen</button>
      </li>
    </ul>
    <button v-if="editMode === true" @click="toggleEditMode">Bearbeiten abschließen</button>
    <button v-else @click="toggleEditMode">Bearbeiten</button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data: function () {
    return {
      items: [
        {
          name: 'Batterie',
          quantity: 1,
          state: 'open'
        },
        {
          name: 'Kekse',
          quantity: 3,
          state: 'bought'
        }
      ],
      newItem: {},
      editMode: false
    }
  },
  methods: {
    saveNewItem: function () {
      this.items.push(this.newItem)
      this.newItem = {}
    },
    deleteItem: function (item) {
      const index = this.items.indexOf(item)

      if (index === -1) {
        return
      }

      this.items.splice(index, 1)
    },
    buyItem: function (item) {
      item.state = 'bought'
    },
    toggleEditMode: function () {
      this.editMode = !this.editMode
    }
  }
}
</script>

<style scoped>
.bought-item {
  text-decoration: line-through;
  color: gray;
}
</style>
