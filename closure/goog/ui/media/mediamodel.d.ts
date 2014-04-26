declare module goog.ui.media {

    /**
     * The supported media mime types, a subset of the media types found here:
     * {@link http://www.iana.org/assignments/media-types/} and here
     * {@link http://en.wikipedia.org/wiki/Internet_media_type}
     * @enum {string}
     */
    export interface MimeType {
        HTML: string;
        PLAIN: string;
        FLASH: string;
        JPEG: string;
        GIF: string;
        PNG: string;
    }

    /**
     * Supported mediums, found here:
     * {@link http://video.search.yahoo.com/mrss}
     * @enum {string}
     */
    export interface Medium {
        IMAGE: string;
        AUDIO: string;
        VIDEO: string;
        DOCUMENT: string;
        EXECUTABLE: string;
    }

    /**
     * An base data value class for all media data models.
     *
     * MediaModels are exact matches to the fields defined in the Yahoo RSS media
     * specification {@link http://search.yahoo.com/mrss/}.
     *
     * The current common data shared by medias is to have URLs, mime types,
     * captions, descriptions, thumbnails and players. Some of these may not be
     * available, or applications may not want to render them, so {@code null}
     * values are allowed. {@code goog.ui.media.MediaRenderer} checks whether the
     * values are available before creating DOMs for them.
     *
     * TODO(user): support asynchronous data models by subclassing
     * {@link goog.events.EventTarget} or {@link goog.ds.DataNode}. Understand why
     * {@link http://goto/datanode} is not available in closure. Add setters to
     * MediaModel once this is supported.
     *
     * @param {string=} opt_url An optional URL of the media.
     * @param {string=} opt_caption An optional caption of the media.
     * @param {string=} opt_description An optional description of the media.
     * @param {goog.ui.media.MediaModel.MimeType=} opt_type The type of the media.
     * @param {goog.ui.media.MediaModel.Medium=} opt_medium The medium of the media.
     * @param {number=} opt_duration The duration of the media in seconds.
     * @param {number=} opt_width The width of the media in pixels.
     * @param {number=} opt_height The height of the media in pixels.
     * @constructor
     */
    export class MediaModel {
        constructor(opt_url?: string, opt_caption?: string, opt_description?: string, opt_type?: goog.ui.media.MediaModel.MimeType, opt_medium?: goog.ui.media.MediaModel.Medium, opt_duration?: number, opt_width?: number, opt_height?: number);
        
        /**
         * Gets the URL of this media.
         * @return {string|undefined} The URL of the media.
         */
        getUrl(): string;
        
        /**
         * Sets the URL of this media.
         * @param {string} url The URL of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setUrl(url: string): goog.ui.media.MediaModel;
        
        /**
         * Gets the caption of this media.
         * @return {string|undefined} The caption of the media.
         */
        getCaption(): string;
        
        /**
         * Sets the caption of this media.
         * @param {string} caption The caption of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setCaption(caption: string): goog.ui.media.MediaModel;
        
        /**
         * Gets the media mime type.
         * @return {goog.ui.media.MediaModel.MimeType|undefined} The media mime type.
         */
        getType(): goog.ui.media.MediaModel.MimeType;
        
        /**
         * Sets the media mime type.
         * @param {goog.ui.media.MediaModel.MimeType} type The media mime type.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setType(type: goog.ui.media.MediaModel.MimeType): goog.ui.media.MediaModel;
        
        /**
         * Gets the media medium.
         * @return {goog.ui.media.MediaModel.Medium|undefined} The media medium.
         */
        getMedium(): goog.ui.media.MediaModel.Medium;
        
        /**
         * Sets the media medium.
         * @param {goog.ui.media.MediaModel.Medium} medium The media medium.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setMedium(medium: goog.ui.media.MediaModel.Medium): goog.ui.media.MediaModel;
        
        /**
         * Gets the description of this media.
         * @return {string|undefined} The description of the media.
         */
        getDescription(): string;
        
        /**
         * Sets the description of this media.
         * @param {string} description The description of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setDescription(description: string): goog.ui.media.MediaModel;
        
        /**
         * Gets the thumbnail urls.
         * @return {Array.<goog.ui.media.MediaModel.Thumbnail>} The list of thumbnails.
         */
        getThumbnails(): Array<goog.ui.media.MediaModel.Thumbnail>;
        
        /**
         * Sets the thumbnail list.
         * @param {Array.<goog.ui.media.MediaModel.Thumbnail>} thumbnails The list of
         *     thumbnail.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setThumbnails(thumbnails: Array<goog.ui.media.MediaModel.Thumbnail>): goog.ui.media.MediaModel;
        
        /**
         * Gets the duration of the media.
         * @return {number|undefined} The duration in seconds.
         */
        getDuration(): number;
        
        /**
         * Sets duration of the media.
         * @param {number} duration The duration of the media, in seconds.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setDuration(duration: number): goog.ui.media.MediaModel;
        
        /**
         * Gets the width of the media in pixels.
         * @return {number|undefined} The width in pixels.
         */
        getWidth(): number;
        
        /**
         * Sets the width of the media.
         * @param {number} width The width of the media, in pixels.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setWidth(width: number): goog.ui.media.MediaModel;
        
        /**
         * Gets the height of the media in pixels.
         * @return {number|undefined} The height in pixels.
         */
        getHeight(): number;
        
        /**
         * Sets the height of the media.
         * @param {number} height The height of the media, in pixels.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setHeight(height: number): goog.ui.media.MediaModel;
        
        /**
         * Gets the player data.
         * @return {goog.ui.media.MediaModel.Player|undefined} The media player data.
         */
        getPlayer(): goog.ui.media.MediaModel.Player;
        
        /**
         * Sets the player data.
         * @param {goog.ui.media.MediaModel.Player} player The media player data.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setPlayer(player: goog.ui.media.MediaModel.Player): goog.ui.media.MediaModel;
        
        /**
         * Gets the categories of the media.
         * @return {Array.<goog.ui.media.MediaModel.Category>} The categories of the
         *     media.
         */
        getCategories(): Array<goog.ui.media.MediaModel.Category>;
        
        /**
         * Sets the categories of the media
         * @param {Array.<goog.ui.media.MediaModel.Category>} categories The categories
         *     of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setCategories(categories: Array<goog.ui.media.MediaModel.Category>): goog.ui.media.MediaModel;
        
        /**
         * Finds the first category with the given scheme.
         * @param {string} scheme The scheme to search for.
         * @return {goog.ui.media.MediaModel.Category} The category that has the
         *     given scheme. May be null.
         */
        findCategoryWithScheme(scheme: string): goog.ui.media.MediaModel.Category;
        
        /**
         * Gets the credits of the media.
         * @return {!Array.<goog.ui.media.MediaModel.Credit>} The credits of the media.
         */
        getCredits(): Array<goog.ui.media.MediaModel.Credit>;
        
        /**
         * Sets the credits of the media
         * @param {!Array.<goog.ui.media.MediaModel.Credit>} credits The credits of the
         *     media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setCredits(credits: Array<goog.ui.media.MediaModel.Credit>): goog.ui.media.MediaModel;
        
        /**
         * Finds all credits with the given role.
         * @param {string} role The role to search for.
         * @return {!Array.<!goog.ui.media.MediaModel.Credit>} An array of credits
         *     with the given role. May be empty.
         */
        findCreditsWithRole(role: string): Array<goog.ui.media.MediaModel.Credit>;
        
        /**
         * Gets the subtitles for the media.
         * @return {Array.<goog.ui.media.MediaModel.SubTitle>} The subtitles.
         */
        getSubTitles(): Array<goog.ui.media.MediaModel.SubTitle>;
        
        /**
         * Sets the subtitles for the media
         * @param {Array.<goog.ui.media.MediaModel.SubTitle>} subtitles The subtitles.
         * @return {!goog.ui.media.MediaModel} The object itself.
         */
        setSubTitles(subtitles: Array<goog.ui.media.MediaModel.SubTitle>): goog.ui.media.MediaModel;
    }

    /**
     * Constructs a thumbnail containing details of the thumbnail's image URL and
     * optionally its size.
     * @param {string} url The URL of the thumbnail's image.
     * @param {goog.math.Size=} opt_size The size of the thumbnail's image if known.
     * @constructor
     * @final
     */
    export class Thumbnail {
        constructor(url: string, opt_size?: goog.math.Size);
    }

    /**
     * Constructs a player containing details of the player's URL and
     * optionally its size.
     * @param {string} url The URL of the player.
     * @param {Object=} opt_vars Optional map of arguments to the player.
     * @param {goog.math.Size=} opt_size The size of the player if known.
     * @constructor
     * @final
     */
    export class Player {
        constructor(url: string, opt_vars?: Object, opt_size?: goog.math.Size);
    }

    /**
     * A taxonomy to be set that gives an indication of the type of media content,
     * and its particular contents.
     * @param {string} scheme The URI that identifies the categorization scheme.
     * @param {string} value The value of the category.
     * @param {string=} opt_label The human readable label that can be displayed in
     *     end user applications.
     * @constructor
     * @final
     */
    export class Category {
        constructor(scheme: string, value: string, opt_label?: string);
    }

    /**
     * Indicates an entity that has contributed to a media object. Based on
     * 'media.credit' in the rss spec.
     * @param {string} value The name of the entity being credited.
     * @param {goog.ui.media.MediaModel.Credit.Role=} opt_role The role the entity
     *     played.
     * @param {goog.ui.media.MediaModel.Credit.Scheme=} opt_scheme The URI that
     *     identifies the role scheme.
     * @constructor
     * @final
     */
    export class Credit {
        constructor(value: string, opt_role?: goog.ui.media.MediaModel.Credit.Role, opt_scheme?: goog.ui.media.MediaModel.Credit.Scheme);
    }

    /**
     * A reference to the subtitle URI for a media object.
     * Implements the 'media.subTitle' in the rss spec.
     *
     * @param {string} href The subtitle's URI.
     *     to fetch the subtitle file.
     * @param {string} lang An RFC 3066 language.
     * @param {string} type The MIME type of the URI.
     * @constructor
     * @final
     */
    export class SubTitle {
        constructor(href: string, lang: string, type: string);
    }
}

declare module goog.ui.media.MediaModel.Credit {

    /**
     * The types of known roles.
     * @enum {string}
     */
    export interface Role {
        UPLOADER: string;
        OWNER: string;
    }

    /**
     * The types of known schemes.
     * @enum {string}
     */
    export interface Scheme {
        EUROPEAN_BROADCASTING: string;
        YAHOO: string;
        YOUTUBE: string;
    }
}
