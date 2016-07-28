define({ "api": [
  {
    "type": "post",
    "url": "/chatrooms",
    "title": "add chatroom",
    "name": "AddChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":userId",
            "description": "<p>Chatroom's participants unique ID Array.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetGender",
            "description": "<p>Chatroom's target gender(Male or Female or Both)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":dramaId",
            "description": "<p>Chatroom's drama unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>IPv4 Address with Port</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isUp",
            "description": "<p>Chatroom is exist or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomAddFailed",
            "description": "<p>(303) fail to add the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddTextToChatroomFailed",
            "description": "<p>(312) fail to add the text to the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsertTextInDBFailed",
            "description": "<p>(314) insert text in DB failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyText",
            "description": "<p>(315) Text does not have any comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/chatrooms/:chatroomId",
    "title": "Get individual chatroom",
    "name": "GetChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "owner"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomNotFound",
            "description": "<p>(301) Requested chatroom is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetChatroomsFailed",
            "description": "<p>(302) failed to get chatrooms</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MembersOfChatroomGottenFailed",
            "description": "<p>(306) fail to get members on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberEnterChatroomFailed",
            "description": "<p>(307) fail to enter the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberLeaveFailed",
            "description": "<p>(308) fail to leave the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberPermissionNotAllowed",
            "description": "<p>(309) This chatroom is not allowed for member of different target gender or in not loged</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptedAddress",
            "description": "<p>(310) This chatroom is not allowed for suspended member</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextsInChatroomGottenFailed",
            "description": "<p>(311) fail to get texts on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextNotFound",
            "description": "<p>(313) Requested text was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "chatrooms/:chatroomId",
    "title": "Remove chatroom information",
    "name": "RemoveChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomRemoveFailed",
            "description": "<p>(305) fail to remove the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "chatrooms/:chatroomId",
    "title": "Update chatroom information",
    "name": "UpdateChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":userId",
            "description": "<p>Chatroom's participants unique ID List.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetGender",
            "description": "<p>Chatroom's target gender(Male or Female or Both)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":dramaId",
            "description": "<p>Chatroom's drama unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>IPv4 Address with Port</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isUp",
            "description": "<p>Chatroom is exist or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomUpdateFailed",
            "description": "<p>(304) fail to update the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/dramas/:did",
    "title": "Create Drama Information",
    "name": "CreateDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>Drama's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date[]",
            "optional": false,
            "field": "airTime",
            "description": "<p>Drama's air-time List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":channelId",
            "description": "<p>Drama's Channel ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":categoryId",
            "description": "<p>Drama's Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Drama's Chatrooms ID List</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaCreateFailed",
            "description": "<p>(903) Drama create failed</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/dramas/:did",
    "title": "Get Drama Information",
    "name": "GetDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "user"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>Drama's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaNotFound",
            "description": "<p>(901) Requested Drama was not found on DB</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/dramas/:did",
    "title": "Remove Drama Information",
    "name": "RemoveDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>drama's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaRemovalFailed",
            "description": "<p>(904) Drama remove failed</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/dramas/:did",
    "title": "Update Drama Information",
    "name": "UpdateDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>Drama's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date[]",
            "optional": false,
            "field": "airTime",
            "description": "<p>Drama's air-time List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":channelId",
            "description": "<p>Drama's Channel ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":categoryId",
            "description": "<p>Drama's Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Drama's Chatrooms ID List</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaUpdateFailed",
            "description": "<p>(902) Drama update failed</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/",
    "title": "Status Codes",
    "name": "StatusCodes",
    "group": "StatusCodes",
    "version": "0.0.0",
    "filename": "lib/app/route/status_all.js",
    "groupTitle": "StatusCodes",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>(1) Unknown Error has occured! We are doomed!</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsufficientParameter",
            "description": "<p>(10) Supplied parameters were not sufficient forhandling request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>(101) Requested User was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserUpdateFailed",
            "description": "<p>(102) User update failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenMismatch",
            "description": "<p>(103) provided token mismatch</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenAlreadyExpired",
            "description": "<p>(104) provided token is already expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyVerified",
            "description": "<p>(105) user already verified oneself</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyLoggedIn",
            "description": "<p>(112) user is trying to login but this userwas already logged in as an user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserLoggingOutWhenNotLoggedIn",
            "description": "<p>(113) user is trying to logout but this useris not logged in as any user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserCredentialsNotMatch",
            "description": "<p>(114) provided user credential is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>(115) provided user is not yet verified</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserEmailAlreadyInUse",
            "description": "<p>(116) provided user email is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CantReportSelf",
            "description": "<p>(117) user cannot report oneself</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRemovalFailed",
            "description": "<p>(119) user removal failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailSendFailed",
            "description": "<p>(119) sending email to user failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivNotFound",
            "description": "<p>(201) Requested University is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivUpdateFailed",
            "description": "<p>(202) University update failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivRemovalFailed",
            "description": "<p>(203) University removal failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptedEmailAddress",
            "description": "<p>(204) none of universities we support accepts provided email domain</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MultipleAcceptedEmailAddress",
            "description": "<p>(205) many of universities we support accepts provided email domain</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotInThisUniversity",
            "description": "<p>(206) current user is not member of requested university</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmailAddress",
            "description": "<p>(207) not valid email address</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmailDomain",
            "description": "<p>(208) not valid email domain</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivAlreadyExisting",
            "description": "<p>(209) university with given name is already existing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPageNumberRequested",
            "description": "<p>(250) requested page number is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidSortRequested",
            "description": "<p>(251) requested sort type is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidFilterRequested",
            "description": "<p>(252) requested filter type is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidSearchFieldRequested",
            "description": "<p>(253) one of requested search field type is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAgeRequested",
            "description": "<p>(254) requested post age range is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyQueryStringRequested",
            "description": "<p>(255) requested query string is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPerPageRequested",
            "description": "<p>(256) requested per page is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>(400) Requested Post was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsOnPostGottenFailed",
            "description": "<p>(401) fail to get comments on the post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateVoteFailed",
            "description": "<p>(402) fail to update votes on the post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetPostsFailed",
            "description": "<p>(403) failed to get posts</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostRemoveFailed",
            "description": "<p>(405) failed to remove post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostAddedFailed",
            "description": "<p>(406) fail to add the post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TitleOfPostIsInvalid",
            "description": "<p>(407) title of the post is continuum of whitespace and newline</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextOfPostIsInvalid",
            "description": "<p>(408) text of the post is continuum group of whitespace and newline</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostVotedAlready",
            "description": "<p>(409) the post is already voted by the user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateVoteInDBFailed",
            "description": "<p>(410) update vote in DB failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostOwnerCanNotVote",
            "description": "<p>(411) one who voted is the post owner</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>(500) Requested comment was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentRemovalFailed",
            "description": "<p>(501) fail to remove the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentUpdateFailed",
            "description": "<p>(502) fail to update the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAddFailed",
            "description": "<p>(503) failed to add comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentReportFailed",
            "description": "<p>(504) fail to report the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentReportAlready",
            "description": "<p>(505) already report the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentOwnerCanNotVote",
            "description": "<p>(506) one who voted is the comment owner</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyReported",
            "description": "<p>(600) user can only get reported once</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyVoted",
            "description": "<p>(601) user can only vote once</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddVoteFailed",
            "description": "<p>(602) adding vote failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddReportFailed",
            "description": "<p>(603) adding report failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyComment",
            "description": "<p>(604) comment does not have any text</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyVote",
            "description": "<p>(605) need to vote</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongVote",
            "description": "<p>(606) vote has to be either &quot;up&quot; or &quot;down&quot;</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RateLimitExceeded",
            "description": "<p>(40004) Too many requests, please try again later.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomNotFound",
            "description": "<p>(301) Requested chatroom is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetChatroomsFailed",
            "description": "<p>(302) failed to get chatrooms</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomAddFailed",
            "description": "<p>(303) fail to add the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomUpdateFailed",
            "description": "<p>(304) fail to update the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomRemoveFailed",
            "description": "<p>(305) fail to remove the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MembersOfChatroomGottenFailed",
            "description": "<p>(306) fail to get members on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberEnterChatroomFailed",
            "description": "<p>(307) fail to enter the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberLeaveFailed",
            "description": "<p>(308) fail to leave the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberPermissionNotAllowed",
            "description": "<p>(309) This chatroom is not allowed for member of different target gender or in not loged</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptedAddress",
            "description": "<p>(310) This chatroom is not allowed for suspended member</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextsInChatroomGottenFailed",
            "description": "<p>(311) fail to get texts on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddTextToChatroomFailed",
            "description": "<p>(312) fail to add the text to the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextNotFound",
            "description": "<p>(313) Requested text was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsertTextInDBFailed",
            "description": "<p>(314) insert text in DB failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyText",
            "description": "<p>(315) Text does not have any comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaNotFound",
            "description": "<p>(901) Requested Drama was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaUpdateFailed",
            "description": "<p>(902) Drama update failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaCreateFailed",
            "description": "<p>(903) Drama create failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaRemovalFailed",
            "description": "<p>(904) Drama remove failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouldNotFetchCount",
            "description": "<p>(700) error when calling db</p>"
          }
        ]
      }
    }
  }
] });
