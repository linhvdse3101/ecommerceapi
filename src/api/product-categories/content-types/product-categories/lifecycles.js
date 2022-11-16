'use strict';
const slugify = require('slugify');
// const addOrCreateStage = (entity, newStage) => {
//   if (entity.publicationStages != null) {
//     return {
//       stages: entity.publicationStages.stages.concat(newStage),
//     };
//   } else {
//     return { stages: [newStage] };
//   }
// };

module.exports = {

    async  beforeCreate(data) {
      if (data.name) {
          console.log(data.name.toLowerCase());
          data.slug = slugify(data.name.toLowerCase());
      }
  },
  async beforeUpdate (params, data){
    data.slug = slugify(data.name.toLowerCase());
}
};
