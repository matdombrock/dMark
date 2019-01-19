var app = new Vue({
    el: '#app',
    data: {
        app_name: "dMark",
        s_tags: true,
        s_desc: true,
        s_name: true,
        count:0,
        search_query: "",
        bookmarks: bookmarks_list,
        results: [],
    },
    methods:{
      search_tag: function(tag){
        this.search_query = tag;
        this.s_tags = true;
        this.s_desc = false;
        this.s_name = false;
        this.search();
      },
      reset: function(){
        this.search_query = "";
        this.s_tags = true;
        this.s_desc = true;
        this.s_name = true;
        this.search();
      },
      count_results: function(){
        //console.log("count"+ $(".card").length);
        //this.count =$(".card").length;
      },
      search: function(){
        console.log("searching for "+this.search_query);
        this.results = [];
        this.count = 0;
        var self = this;
        this.bookmarks.forEach(function(bookmark){
          //console.log(bookmark.name);
          var stars = 0;
          if(self.s_tags == true){
            if(bookmark.tags.includes(self.search_query)){
              stars+=1;
            }
          }
          if(self.s_name == true){
            //console.log("checking name "+bookmark.name+ "against "+self.search_query);
            if(bookmark.name.includes(self.search_query)){
              stars+=1;
            }
          }
          if(self.s_desc){
            if(bookmark.desc.includes(self.search_query)){
              stars+=1;
            }
          }
          if(stars!=0){
            //console.log("Match!");
            self.count += 1;
            bookmark.stars = stars;
            self.results.push(bookmark);
          }else{
            //console.log("No Match!");
          }
        });
      }
    }
  })
  app.search();