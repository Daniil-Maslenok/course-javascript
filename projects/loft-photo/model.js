import { rejects } from "assert";
import { resolve } from "path";

export default {
  getRandomElement(array) {
    if (!array.length) {
      return null;
    }

    const index = parseInt(Math.random() * (array.length - 1));

    return array[index];
  },

  async getNextPhoto() {
    const friend = this.getRandomElement(this.friendsDB.items);
    const photos = await this.getFriendPhotos(friend.id);
    const photo = this.getRandomElement(photos.items);
    const size = this.findSize(photo);

    return { friend, id: photo.id, url: photo.url }
  },

  findSize(photo) {
    const size = photo.sizes.find((size) => size.width >= 360);

    if (!sizes) {
      return current.sizes.reduce((biggest, current) => {
        if (current.width > biggest.width) {
          return current;
        }

        return biggest;
      }, photo.sizes[0]);
    }
  },

  async init() {
    this.photoCache = {};
    this.friends = await this.getFriends();
    [this.me] = await this.getUsers();
  },

  login() {
    return new Promise((resolve, reject) => {
      VK.init({
        apiId: 51700158,
      });

      VK.Auth.login((response) => {
        if (response.session) {
          resolve(response);
        } else {
          console.error(response);
          reject(response);
        }
      }, PERM_FRIENDS | PERM_PHOTOS);
    });
  },

  logout() {
    return new Promise((resolve) => VK.Auto.revokeGrants(resolve));
  },

  callApi(method, params) {
    params.v = params.v || '5.76';

    return new Promise((resolve, reject) => {
      VK.api(method, params, (response) => {
        if (response.error) {
          reject(new Error(response.error.error_msg));
        } else {
          resolve(response.response);
        }
      });
    });
  },

  getFriends() {
    const params = {
      fields: ['photo_50', 'photo_100'],
    };

    return this.callApi('friends.get', params);
  },

  getPhotos(owner) {
    const params = {
      owner_id: owner,
    };

    return this.callApi('photos.getAll', params);
  },

  async getFriendPhotos(id) {
    let photos = this.photoCache[id];

    if (photos) {
      return photos;
    }

    photos = await this.getPhotos(id);

    this.photoCache[id] = photos;

    return photos;
  }

  getUsers(ids) {
    const params = {
      fields: ['photo_50, photo_100'],
    };

    if (this) {
      params.user_ids = ids;
    }

    return this.callApi('user.get', params);
  },
};
