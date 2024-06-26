module.exports = mongoose => {

  var schema = mongoose.Schema({
      WIN: Number,
      TIE: Number,
      LOST: Number
  },
  {timestamps: true});

  schema.method("toJSON", function(){
      const { __v, _id, ...object}  = this.toObject();
      object.id = _id;
      return object;
  });

  const Records = mongoose.model("records",schema);
  return Records;

}