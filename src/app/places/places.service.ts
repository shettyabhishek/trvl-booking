import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})

export class PlacesService {
  private _allPlaces:Place[] = [
    new Place(
       "12Q3B2VRgVbCwYywEtyQ3fDm6sECLLAJhh",
      "Muller LLC",
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. ",
      2574.82,
      "https://images.trvl-media.com/lodging/1000000/60000/54900/54835/ac01e033_y.jpg",
      "Askeaton"
    ),new Place(
       "18SdHUraNw4QtwtT8KKE5PCfuugu8epwPc",
      "Ortiz-MacGyver",
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      1230.55,
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b8/61/ab/suite-room.jpg?w=1200&h=-1&s=1",
      "Krajansumbermujur"
    ),new Place(
       "19hVJw71XKdcxoW8fvG5RDBz32Kt13PuWd",
      "Blanda Group",
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. ",
      1484.50,
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/80/e0/dd/photo0jpg.jpg?w=700&h=-1&s=1",
      "La Salud"
    ),new Place(
       "17J6a7qB5GXwv51sy9GLYKBUQxpx3oeuuL",
      "Veum Group",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. ",
      6244.40,
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4e/15/f6/manor-familiya-fishing.jpg?w=600&h=400&s=1",
      "Bryukhovetskaya"
    )
  ];

  private _allOffers: Place[] = [new Place(
    "1MSvLRxVhBruH7dmwRVodvMQAWHFnDW2uH",
    "Sporer-Rempel",
    "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    669.87,
    "https://media-cdn.tripadvisor.com/media/photo-s/13/d0/74/b4/outside-view.jpg",
    "Jibiya"
  ),new Place(
    "1G3LzHMja5KDy4YUeKGrcyFJT8Nh9YmtAR",
    "Kunde-Ortiz",
    "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    694.83,
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256437345.jpg?k=64be2b45a62562d02c6c49a34d9433b897299fbd3600266d343d6d800ff80a86&o=&hp=1",
    "Cambuga"
  ),new Place(
    "1GJS2vNmB2m5qFZzHULkYdT5XETqEvVYRn",
    "Morar Inc",
    "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    305.89,
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107182968.jpg?k=3fbe81a63634228d4de469714a2b83375a07c465c76619bdc07d3b311fe83454&o=&hp=1",
    "T’et’ri Tsqaro"
  ),new Place(
    "1A2X4ToXmzFPtu7NjzUsn6t4ozqf81yfWX",
    "Morar Inc",
    "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    276.67,
    "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-s/02/40/3c/17/getlstd-property-photo.jpg?w=600&h=-1&s=1",
    "Zhouzhuang"
  ),new Place(
    "1NNStFfamPUiLoJRDb7a351Xv6PnFgY1c3",
    "Smith and Sons",
    "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    997.77,
    "https://pix6.agoda.net/hotelImages/190/19098061/19098061_20111313000093244764.jpg",
    "Yuyue"
  ),new Place(
    "1MJKbNY6a8TFS3pkd4uVftRQu5anyw4wgW",
    "Abbott-Lynch",
    "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    775.69,
    "https://media-cdn.tripadvisor.com/media/photo-s/07/3a/84/fe/bali-world-hotel.jpg",
    "Leuwibuleud"
  )]
  constructor() { }

  //function to get all places
  getPlaces():Place[]{
    return [...this._allPlaces];
  }

  //function to get the place details using the id
  getPlaceDetails(placeId: string | null | undefined): Place | undefined{
    if (!placeId || null) return undefined;
    return this._allPlaces.find((item)=>{
      return item.id === placeId;
    })
  }

  //function to get all offers
  getOffers():Place[]{
    return [...this._allOffers];
  }

  //function to get the offer details using the id
  getOfferDetails(placeId: string | null | undefined): Place | undefined{
    if (!placeId || null) return undefined;
    return this._allOffers.find((item)=>{
      return item.id === placeId;
    })
  }
}
